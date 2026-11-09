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
  baseAlpha: number;
  color: string;
  hasHalo: boolean;
  wobbleSpeed: number;
  wobbleRadius: number;
  wobbleAngle: number;
}

export const AmbientDustCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

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

    // Mouse coordinates with silky smooth lerp (no snapping or stepping)
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
    };
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

    // Warm luxury palette: Amber, Gold, and glowing Champagne
    const palette = [
      'rgba(245, 158, 11, ', // Amber-500
      'rgba(251, 191, 36, ', // Amber-400
      'rgba(252, 211, 77, ', // Amber-300
      'rgba(254, 240, 138, ', // Gold-200
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 14000), 80), 125);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];
        const radius = Math.random() * 2.0 + 0.8;
        const baseVx = (Math.random() - 0.5) * 0.3;
        const baseVy = -Math.random() * 0.35 - 0.1; // Gentle upward thermal float
        const hasHalo = Math.random() > 0.4; // Soft halo for realistic glow without box blur

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          baseAlpha: Math.random() * 0.28 + 0.18, // Dense and visible, perfectly balanced
          color,
          hasHalo,
          wobbleSpeed: Math.random() * 0.018 + 0.006,
          wobbleRadius: Math.random() * 1.1 + 0.3,
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

      // Silky lerping with 0.06 factor for buttery soft pursuit
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Update full-screen GPU shader spotlight coordinates (NO raster tiles, NO box banding)
      if (glowRef.current) {
        glowRef.current.style.setProperty('--glow-x', `${mouse.x.toFixed(1)}px`);
        glowRef.current.style.setProperty('--glow-y', `${mouse.y.toFixed(1)}px`);
        glowRef.current.style.opacity = mouse.isMoving ? '1' : '0.5';
      }

      // Draw floating golden particles with anti-aliased concentric halos (Zero square artifacts)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Sinusoidal ambient wobble
        p.wobbleAngle += p.wobbleSpeed;
        const wobbleX = Math.cos(p.wobbleAngle) * p.wobbleRadius;
        const wobbleY = Math.sin(p.wobbleAngle) * p.wobbleRadius;

        // Smooth quadratic mouse proximity interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const maxDist = 170;

        let proximityBoost = 0;
        if (dist < maxDist && dist > 0) {
          const norm = 1 - dist / maxDist;
          const force = norm * norm * 1.2; // Smooth quadratic falloff
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
          proximityBoost = norm * norm * 0.38; // Quadratic brightening near cursor
        }

        // Velocity damping back to base float
        p.vx += (p.baseVx - p.vx) * 0.035;
        p.vy += (p.baseVy - p.vy) * 0.035;

        p.x += (p.vx + wobbleX * 0.18) * (delta * 60);
        p.y += (p.vy + wobbleY * 0.18) * (delta * 60);

        // Screen wrap-around with generous margin
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const currentAlpha = Math.min(p.baseAlpha + proximityBoost, 0.85);

        // 1. Soft anti-aliased outer halo for glowing motes (NO box blur, NO raster squares)
        if (p.hasHalo) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.22).toFixed(3)})`;
          ctx.fill();
        }

        // 2. Crisp, perfectly rounded core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
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
    <>
      {/* 1. Full-Screen GPU Fragment Shader Radial Spotlight (Mathematically smooth, zero tile banding) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-700 ease-out"
        style={{
          background:
            'radial-gradient(750px circle at var(--glow-x, 50vw) var(--glow-y, 50vh), rgba(245, 158, 11, 0.075) 0%, rgba(245, 158, 11, 0.04) 25%, rgba(245, 158, 11, 0.015) 50%, rgba(245, 158, 11, 0.003) 70%, transparent 85%)',
          mixBlendMode: 'screen',
          opacity: 0,
        }}
      />

      {/* 2. Denser Amber Dust Canvas with Vector Anti-Aliased Halos */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-20 w-full h-full"
        style={{ mixBlendMode: 'screen', opacity: 0.95 }}
      />
    </>
  );
};
