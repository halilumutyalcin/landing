'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const AuraThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lights - Architectural warm amber + cool limestone fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 3.5, 20);
    amberLight.position.set(3, 3, 3);
    scene.add(amberLight);

    const coolLight = new THREE.PointLight(0xe2e8f0, 2.0, 20);
    coolLight.position.set(-3, -2, 2);
    scene.add(coolLight);

    const backRimLight = new THREE.DirectionalLight(0xd97706, 1.2);
    backRimLight.position.set(0, 4, -4);
    scene.add(backRimLight);

    // 5. Mesh - Parametric Architectural Ribbon / Sculpture (Travertine & Obsidian)
    const geometry = new THREE.TorusKnotGeometry(1.25, 0.36, 140, 28, 2, 3);

    // Architectural Travertine & Polished Marble material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x18181b,
      emissive: 0x050507,
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay for architectural drawing / CAD aesthetic
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireframeMesh.scale.set(1.002, 1.002, 1.002);
    scene.add(wireframeMesh);

    // 6. Floating Ambient Spatial Particles
    const particlesCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 7. Interactive Mouse / Pointer Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.9;
      targetRotationX = mouseY * 0.7;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // 8. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 9. Animation Loop with smooth lerp
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous gentle architectural rotation
      mesh.rotation.y += 0.004;
      mesh.rotation.x += 0.002;

      // Mouse tracking interpolation
      mesh.rotation.y += (targetRotationY - (mesh.rotation.y % (Math.PI * 2))) * 0.05;
      mesh.rotation.x += (targetRotationX - (mesh.rotation.x % (Math.PI * 2))) * 0.05;

      wireframeMesh.rotation.copy(mesh.rotation);

      // Light breathing effect
      amberLight.position.x = Math.sin(elapsedTime * 0.8) * 3 + 1;
      amberLight.position.y = Math.cos(elapsedTime * 0.6) * 3 + 1;

      // Floating particles slow drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Clean-up
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 text-center bg-zinc-950/40 rounded-3xl border border-white/5">
        <div className="space-y-2">
          <div className="text-amber-400 font-mono text-xs uppercase tracking-widest">Aura 3D Visualizer</div>
          <div className="text-white font-serif text-lg">Mekansal Form Heykeli</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center pointer-events-auto">
      {/* Background ambient halo */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      {/* Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Fareyi hareket ettirerek mimari heykeli 3D döndürün"
      />

      {/* Floating subtle badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>Three.js WebGL · İnteraktif Yüzey</span>
      </div>
    </div>
  );
};
