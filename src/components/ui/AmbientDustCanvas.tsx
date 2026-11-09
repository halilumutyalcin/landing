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
  glowColor: string;
  hasGlow: boolean;
  wobbleSpeed: number;
  wobbleRadius: number;
  wobbleAngle: number;
}

interface SmokeTrail {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  decay: number;
  vx: number;
  vy: number;
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

    // Mouse coordinates with smooth lerping
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      isMoving: false,
    };
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;

      // Spawn smoke puffs when cursor moves
      const distMoved = Math.hypot(e.clientX - mouse.prevX, e.clientY - mouse.prevY);
      if (distMoved > 20 && smokeTrails.length < 24) {
        smokeTrails.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.random() * 8 + 6,
          maxRadius: Math.random() * 28 + 24,
          alpha: Math.random() * 0.08 + 0.05,
          decay: Math.random() * 0.003 + 0.002,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.5 - 0.2, // Gentle upward smoke rise
        });
        mouse.prevX = e.clientX;
        mouse.prevY = e.clientY;
      }

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 1500);
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
      { color: 'rgba(245, 158, 11, ', glow: 'rgba(245, 158, 11, 0.45)' }, // Amber-500
      { color: 'rgba(251, 191, 36, ', glow: 'rgba(251, 191, 36, 0.5)' },  // Amber-400
      { color: 'rgba(252, 211, 77, ', glow: 'rgba(252, 211, 77, 0.4)' },  // Amber-300
      { color: 'rgba(254, 240, 138, ', glow: 'rgba(254, 240, 138, 0.5)' }, // Gold-200
    ];

    let particles: Particle[] = [];
    let smokeTrails: SmokeTrail[] = [];

    // Densified particle count (90 - 130 particles based on viewport)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 13000), 85), 130);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const item = palette[Math.floor(Math.random() * palette.length)];
        const radius = Math.random() * 2.2 + 0.8;
        const baseVx = (Math.random() - 0.5) * 0.35;
        const baseVy = -Math.random() * 0.4 - 0.12; // Natural upward thermal float
        const hasGlow = Math.random() > 0.45; // ~55% of particles have soft halo glow

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          baseAlpha: Math.random() * 0.32 + 0.22, // Noticeably more visible & dense
          color: item.color,
          glowColor: item.glow,
          hasGlow,
          wobbleSpeed: Math.random() * 0.02 + 0.008,
          wobbleRadius: Math.random() * 1.2 + 0.3,
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
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      // Update GPU-accelerated CSS ambient glow position (ZERO Mach banding)
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouse.x - 240}px, ${mouse.y - 240}px, 0)`;
        glowRef.current.style.opacity = mouse.isMoving ? '1' : '0.45';
      }

      // 1. Draw subtle smoke trail wisps (smooth dispersion)
      for (let i = smokeTrails.length - 1; i >= 0; i--) {
        const s = smokeTrails[i];
        s.radius += (s.maxRadius - s.radius) * 0.04;
        s.alpha -= s.decay;
        s.x += s.vx;
        s.y += s.vy;

        if (s.alpha <= 0.004) {
          smokeTrails.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${s.alpha.toFixed(3)})`;
        ctx.fill();
      }

      // 2. Draw dense amber dust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Sinusoidal ambient wobble
        p.wobbleAngle += p.wobbleSpeed;
        const wobbleX = Math.cos(p.wobbleAngle) * p.wobbleRadius;
        const wobbleY = Math.sin(p.wobbleAngle) * p.wobbleRadius;

        // Mouse disturbance force (Natural smoke/dust dispersion)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const maxDist = 160;

        let proximityBoost = 0;
        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.5;
          p.vx += (dx / dist) * force * 0.7;
          p.vy += (dy / dist) * force * 0.7;
          proximityBoost = (1 - dist / maxDist) * 0.45; // Brighter near cursor
        }

        // Velocity damping back to base upward float
        p.vx += (p.baseVx - p.vx) * 0.035;
        p.vy += (p.baseVy - p.vy) * 0.035;

        p.x += (p.vx + wobbleX * 0.2) * (delta * 60);
        p.y += (p.vy + wobbleY * 0.2) * (delta * 60);

        // Screen wrap-around
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        if (p.y > height + 15) p.y = -15;

        // Current alpha with proximity illumination
        const currentAlpha = Math.min(p.baseAlpha + proximityBoost, 0.85);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.hasGlow) {
          ctx.shadowBlur = p.radius * 3.5;
          ctx.shadowColor = p.glowColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(2)})`;
        ctx.fill();
      }

      // Reset shadow blur
      ctx.shadowBlur = 0;
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
      {/* 1. GPU-Interpolated Smooth Ambient Spotlight (Zero Color Banding) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-10 w-[480px] h-[480px] rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.05) 30%, rgba(245, 158, 11, 0.015) 55%, transparent 75%)',
          filter: 'blur(55px)',
          mixBlendMode: 'screen',
          opacity: 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* 2. Denser Amber Dust & Smoke Particle Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-20 w-full h-full"
        style={{ mixBlendMode: 'screen', opacity: 0.95 }}
      />
    </>
  );
};
