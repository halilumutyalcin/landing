'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type MaterialTheme = 'travertine' | 'obsidian' | 'japandi';

interface AuraScrollRoomCanvas3DProps {
  progress: number; // 0.0 to 1.0 (driven by scroll or step)
  materialTheme: MaterialTheme;
  className?: string;
}

export const AuraScrollRoomCanvas3D: React.FC<AuraScrollRoomCanvas3DProps> = ({
  progress,
  materialTheme,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const themeRef = useRef(materialTheme);
  themeRef.current = materialTheme;

  // Scene object references to animate based on progress
  const animatedRefs = useRef<{
    coffeeTable?: THREE.Group;
    pendantLight?: THREE.Group;
    amberSpotLight?: THREE.PointLight;
    sofaGroup?: THREE.Group;
    slattedWallGroup?: THREE.Group;
    fireplaceLight?: THREE.PointLight;
    fireplaceBed?: THREE.Mesh;
    materials?: {
      floor?: THREE.MeshStandardMaterial;
      walls?: THREE.MeshStandardMaterial;
      marbleTable?: THREE.MeshStandardMaterial;
      woodAccent?: THREE.MeshStandardMaterial;
      fabric?: THREE.MeshStandardMaterial;
    };
  }>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = null;

    // 2. Camera (Architectural Isometric Perspective)
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(7.8, 5.8, 8.8);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Base Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Natural Sunlight from Right Window
    const sunLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    sunLight.position.set(6, 6, 2);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 25;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Warm Architectural Amber Spotlight (turns on when pendant chandelier is added)
    const amberSpotLight = new THREE.PointLight(0xf59e0b, 0, 15);
    amberSpotLight.position.set(0, 2.5, 0);
    amberSpotLight.castShadow = true;
    scene.add(amberSpotLight);

    // Modern Fireplace Glow Light
    const fireplaceLight = new THREE.PointLight(0xff6600, 0, 6);
    fireplaceLight.position.set(-3.1, 0.6, 0);
    scene.add(fireplaceLight);

    // 5. Materials
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3d2c20,
      roughness: 0.4,
      metalness: 0.1,
    });

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1f2126,
      roughness: 0.8,
      metalness: 0.05,
    });

    const marbleTableMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.2,
      metalness: 0.15,
    });

    const woodAccentMat = new THREE.MeshStandardMaterial({
      color: 0x4a3728,
      roughness: 0.5,
      metalness: 0.05,
    });

    const fabricMat = new THREE.MeshStandardMaterial({
      color: 0x383b42,
      roughness: 0.85,
      metalness: 0.05,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.85,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x88b0d0,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.7,
    });

    const fireBedMat = new THREE.MeshBasicMaterial({
      color: 0x221100,
    });

    animatedRefs.current.materials = {
      floor: floorMat,
      walls: wallMat,
      marbleTable: marbleTableMat,
      woodAccent: woodAccentMat,
      fabric: fabricMat,
    };
    animatedRefs.current.amberSpotLight = amberSpotLight;
    animatedRefs.current.fireplaceLight = fireplaceLight;
    animatedRefs.current.fireplaceBed = undefined; // assigned later

    // 6. BUILD ROOM STRUCTURE
    const room = new THREE.Group();
    scene.add(room);

    // A. FLOOR
    const floorGeo = new THREE.BoxGeometry(6.6, 0.2, 5.6);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, -0.1, 0);
    floor.receiveShadow = true;
    room.add(floor);

    // Parquet/Tile Grid lines
    const grid = new THREE.GridHelper(6.2, 14, 0x1a1a1f, 0x141418);
    grid.position.set(0, 0.01, 0);
    room.add(grid);

    // B. BACK WALL
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(6.6, 3.4, 0.2), wallMat);
    backWall.position.set(0, 1.6, -2.8);
    backWall.receiveShadow = true;
    room.add(backWall);

    // C. LEFT WALL (With Fireplace cutaway)
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.4, 5.6), wallMat);
    leftWall.position.set(-3.3, 1.6, 0);
    leftWall.receiveShadow = true;
    room.add(leftWall);

    // Fireplace box
    const firebox = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.45, 1.8),
      new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9 })
    );
    firebox.position.set(-3.2, 0.55, 0);
    room.add(firebox);

    const fireBed = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 1.5), fireBedMat);
    fireBed.position.set(-3.15, 0.45, 0);
    room.add(fireBed);
    animatedRefs.current.fireplaceBed = fireBed;

    // D. RIGHT SIDE: PANORAMIC GLASS FACADE
    const windowGlass = new THREE.Mesh(new THREE.BoxGeometry(0.06, 3.2, 5.3), glassMat);
    windowGlass.position.set(3.3, 1.6, 0);
    room.add(windowGlass);

    // Window Mullions (Black metal frame)
    const mullionMat = new THREE.MeshStandardMaterial({ color: 0x111113, metalness: 0.8 });
    const vM1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.4, 0.08), mullionMat);
    vM1.position.set(3.3, 1.6, -1.3);
    room.add(vM1);
    const vM2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.4, 0.08), mullionMat);
    vM2.position.set(3.3, 1.6, 1.3);
    room.add(vM2);

    // E. CEILING
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.18, 5.6), wallMat);
    ceiling.position.set(0, 3.3, 0);
    room.add(ceiling);

    // -------------------------------------------------------------
    // DECOR ELEMENT 1: COFFEE TABLE (Calacatta Viola / Travertine)
    // Drops from sky (y: 4.5 -> 0.22) when progress >= 0.20
    // -------------------------------------------------------------
    const tableGroup = new THREE.Group();
    // Marble slab top
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 0.9), marbleTableMat);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    tableTop.position.set(0, 0.25, 0);
    tableGroup.add(tableTop);

    // Monolithic fluted marble base
    const tableBase = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.25, 24), marbleTableMat);
    tableBase.position.set(0, 0.125, 0);
    tableBase.castShadow = true;
    tableGroup.add(tableBase);

    // Small ceramic decorative bowl on table
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.06, 0.08, 16), brassMat);
    bowl.position.set(0.35, 0.34, 0.1);
    tableGroup.add(bowl);

    // Start high up (hidden)
    tableGroup.position.set(0, 5.0, 0);
    room.add(tableGroup);
    animatedRefs.current.coffeeTable = tableGroup;

    // -------------------------------------------------------------
    // DECOR ELEMENT 2: BRUTALIST PENDANT LIGHTING (Brass linear bar)
    // Lowers from ceiling (y: 6.0 -> 2.4) when progress >= 0.40
    // -------------------------------------------------------------
    const pendantGroup = new THREE.Group();
    // Two thin hanging brass cords
    const cord1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.2, 8), brassMat);
    cord1.position.set(-0.6, 0.6, 0);
    pendantGroup.add(cord1);
    const cord2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.2, 8), brassMat);
    cord2.position.set(0.6, 0.6, 0);
    pendantGroup.add(cord2);

    // Horizontal linear brass bar
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 16), brassMat);
    bar.rotation.z = Math.PI / 2;
    pendantGroup.add(bar);

    // Glowing LED emitter strip
    const ledStrip = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.015, 0.02),
      new THREE.MeshBasicMaterial({ color: 0xffe6aa })
    );
    ledStrip.position.set(0, -0.02, 0);
    pendantGroup.add(ledStrip);

    pendantGroup.position.set(0, 6.0, 0);
    room.add(pendantGroup);
    animatedRefs.current.pendantLight = pendantGroup;

    // -------------------------------------------------------------
    // DECOR ELEMENT 3: BOUCLÉ SOFA & TACTILE RUG
    // Slides in from right (x: 6.5 -> 0.0) when progress >= 0.60
    // -------------------------------------------------------------
    const sofaGroup = new THREE.Group();

    // Wool Area Rug
    const rug = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.02, 2.8),
      new THREE.MeshStandardMaterial({ color: 0x1b1d22, roughness: 0.95 })
    );
    rug.position.set(0, 0.01, 0);
    rug.receiveShadow = true;
    sofaGroup.add(rug);

    // Curved Bouclé Sofa Base & Back
    const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 1.1), fabricMat);
    sofaBase.position.set(0, 0.22, 1.2);
    sofaBase.castShadow = true;
    sofaBase.receiveShadow = true;
    sofaGroup.add(sofaBase);

    const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.45, 0.3), fabricMat);
    sofaBack.position.set(0, 0.55, 1.6);
    sofaBack.castShadow = true;
    sofaGroup.add(sofaBack);

    // Accent Pillows
    const pillow1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.15), brassMat);
    pillow1.position.set(-0.7, 0.5, 1.4);
    sofaGroup.add(pillow1);

    const pillow2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.15), fabricMat);
    pillow2.position.set(0.7, 0.5, 1.4);
    sofaGroup.add(pillow2);

    sofaGroup.position.set(7.0, 0, 0);
    room.add(sofaGroup);
    animatedRefs.current.sofaGroup = sofaGroup;

    // -------------------------------------------------------------
    // DECOR ELEMENT 4: ACOUSTIC SLATTED WALL & BOTANICAL VASE
    // Snaps in on back wall when progress >= 0.80
    // -------------------------------------------------------------
    const slattedWallGroup = new THREE.Group();
    for (let i = -1.4; i <= 1.4; i += 0.18) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.2, 0.06), woodAccentMat);
      slat.position.set(i + 1.5, 1.6, -2.65);
      slat.castShadow = true;
      slattedWallGroup.add(slat);
    }

    // Modern Minimalist Canvas Art
    const canvasArt = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.3, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x0a0a0d, roughness: 0.3 })
    );
    canvasArt.position.set(-1.4, 1.9, -2.65);
    slattedWallGroup.add(canvasArt);

    const goldAccentLine = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 0.05), brassMat);
    goldAccentLine.position.set(-1.4, 1.9, -2.62);
    slattedWallGroup.add(goldAccentLine);

    slattedWallGroup.position.set(0, 4.0, 0); // start elevated
    room.add(slattedWallGroup);
    animatedRefs.current.slattedWallGroup = slattedWallGroup;

    // 7. Mouse Velocity / Pointer Tracking for 3D Camera Parallax
    let targetCameraX = 7.8;
    let targetCameraY = 5.8;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetCameraX = 7.8 + x * 1.5;
      targetCameraY = 5.8 + y * 1.0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

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

    // 9. Animation Loop (Lerp positions according to progress)
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const p = progressRef.current;
      const theme = themeRef.current;

      // Update material palette dynamically based on selected moodboard
      const mats = animatedRefs.current.materials;
      if (mats) {
        if (theme === 'travertine') {
          mats.floor?.color.setHex(0xd5c8b5); // Warm Roman Travertine
          mats.marbleTable?.color.setHex(0xf7f5f0); // Cream Carrara
          mats.woodAccent?.color.setHex(0x5c4230); // Warm Natural Oak
          mats.fabric?.color.setHex(0xe8e4dc); // Ivory Bouclé
        } else if (theme === 'obsidian') {
          mats.floor?.color.setHex(0x18181b); // Deep Charcoal Slate
          mats.marbleTable?.color.setHex(0x101014); // Nero Marquina Black Marble
          mats.woodAccent?.color.setHex(0x281e18); // Smoked Walnut
          mats.fabric?.color.setHex(0x2d3036); // Graphite Bouclé
        } else if (theme === 'japandi') {
          mats.floor?.color.setHex(0x8a7f72); // Japandi Limestone
          mats.marbleTable?.color.setHex(0xdfd8ca); // Wabi-Sabi Sandstone
          mats.woodAccent?.color.setHex(0xa68058); // Hinoki Cedar
          mats.fabric?.color.setHex(0xd6cfc4); // Sandy Organic Linen
        }
      }

      // --- DECOR PHASE ANIMATIONS ---

      // 1. Table Animation (Drop down around p >= 0.20)
      const table = animatedRefs.current.coffeeTable;
      if (table) {
        const tableTargetY = p >= 0.2 ? 0.0 : 4.5;
        table.position.y += (tableTargetY - table.position.y) * 0.08;
      }

      // 2. Pendant Light (Drops down around p >= 0.40) & Amber Spotlight
      const pendant = animatedRefs.current.pendantLight;
      const spot = animatedRefs.current.amberSpotLight;
      if (pendant && spot) {
        const pendantTargetY = p >= 0.4 ? 2.4 : 5.8;
        pendant.position.y += (pendantTargetY - pendant.position.y) * 0.08;

        const targetSpotIntensity = p >= 0.4 ? 2.6 : 0.0;
        spot.intensity += (targetSpotIntensity - spot.intensity) * 0.06;
      }

      // 3. Sofa & Rug (Slides from right around p >= 0.60)
      const sofa = animatedRefs.current.sofaGroup;
      if (sofa) {
        const sofaTargetX = p >= 0.6 ? 0.0 : 6.5;
        sofa.position.x += (sofaTargetX - sofa.position.x) * 0.08;
      }

      // 4. Slatted Wall & Fireplace (Snaps into place around p >= 0.80)
      const wallAccent = animatedRefs.current.slattedWallGroup;
      const fireLight = animatedRefs.current.fireplaceLight;
      const fireBed = animatedRefs.current.fireplaceBed;
      if (wallAccent && fireLight && fireBed) {
        const wallTargetY = p >= 0.8 ? 0.0 : 4.0;
        wallAccent.position.y += (wallTargetY - wallAccent.position.y) * 0.08;

        const targetFireIntensity = p >= 0.8 ? 1.8 + Math.sin(Date.now() * 0.008) * 0.4 : 0.0;
        fireLight.intensity += (targetFireIntensity - fireLight.intensity) * 0.1;

        if (p >= 0.8) {
          (fireBed.material as THREE.MeshBasicMaterial).color.setHex(0xff5500);
        } else {
          (fireBed.material as THREE.MeshBasicMaterial).color.setHex(0x1a0a00);
        }
      }

      // Smooth camera parallax
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 1.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[420px] sm:min-h-[540px] lg:min-h-[620px] ${className}`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};
