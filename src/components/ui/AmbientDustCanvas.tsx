'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  alpha: number;
  color: string;
  wobbleSpeed: number;
  wobbleRadius: number;
  wobbleAngle: number;
}

export const AmbientDustCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Respect user motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerp
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, isMoving: false };
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 2000);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Color palette: Elegant warm gold, amber & subtle champagne dust
    const colors = [
      'rgba(245, 158, 11, ', // Amber-500
      'rgba(251, 191, 36, ', // Amber-400
      'rgba(252, 211, 77, ', // Amber-300
      'rgba(217, 119, 6, ',  // Amber-600
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 28000), 45);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.5 + 0.6;
        const baseVx = (Math.random() - 0.5) * 0.25;
        const baseVy = -Math.random() * 0.3 - 0.08; // Gentle upward drift like smoke/embers

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          alpha: Math.random() * 0.25 + 0.08, // Very subtle, non-distracting
          color: colors[Math.floor(Math.random() * colors.length)],
          wobbleSpeed: Math.random() * 0.015 + 0.005,
          wobbleRadius: Math.random() * 0.8 + 0.2,
          wobbleAngle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Render loop
    let lastTime = performance.now();
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Skip render when tab is invisible to save 100% battery/GPU
      if (document.hidden) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Soft ambient flashlight glow following the mouse behind surfaces
      if (mouse.x > -500 && mouse.y > -500) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
        glow.addColorStop(0, 'rgba(245, 158, 11, 0.038)');
        glow.addColorStop(0.5, 'rgba(245, 158, 11, 0.012)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle sinusoidal wobble
        p.wobbleAngle += p.wobbleSpeed;
        const wobbleX = Math.cos(p.wobbleAngle) * p.wobbleRadius;
        const wobbleY = Math.sin(p.wobbleAngle) * p.wobbleRadius;

        // Mouse disturbance (Smoke / Dust dispersion effect)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.2;
          p.vx += (dx / dist) * force * 0.6;
          p.vy += (dy / dist) * force * 0.6;
        }

        // Apply velocity with air resistance damping
        p.vx += (p.baseVx - p.vx) * 0.03;
        p.vy += (p.baseVy - p.vy) * 0.03;

        p.x += (p.vx + wobbleX * 0.15) * (delta * 60);
        p.y += (p.vy + wobbleY * 0.15) * (delta * 60);

        // Screen wrap-around
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle with soft atmospheric halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      style={{ mixBlendMode: 'screen', opacity: 0.85 }}
    />
  );
};
