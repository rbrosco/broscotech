import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  theme: 'light' | 'dark';
}

export default function Hero3DScene({ theme }: Hero3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 14, 26);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // 2. Wave Grid Parameters (Linear / Vercel wave style)
    const cols = 55;
    const rows = 40;
    const count = cols * rows;
    const spacing = 0.95;

    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    let idx = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const x = (ix - cols / 2) * spacing;
        const z = (iy - rows / 2) * spacing;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        originalPositions[idx * 3] = x;
        originalPositions[idx * 3 + 1] = y;
        originalPositions[idx * 3 + 2] = z;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const particleColor = isDark ? 0x818cf8 : 0x4f46e5;
    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: isDark ? 0.14 : 0.12,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Dynamic wave mesh lines (connecting grid for depth)
    const lineIndices: number[] = [];
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const current = ix * rows + iy;
        if (ix < cols - 1) {
          lineIndices.push(current, (ix + 1) * rows + iy);
        }
        if (iy < rows - 1) {
          lineIndices.push(current, ix * rows + (iy + 1));
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x4338ca : 0x6366f1,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const meshLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(meshLines);

    // Mouse tracking for fluid ripples
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      targetMouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 1.35;

      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let pIdx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const u = ix / cols;
          const v = iy / rows;

          const origX = originalPositions[pIdx * 3];
          const origZ = originalPositions[pIdx * 3 + 2];

          // Compound mathematical sine waves
          const wave1 = Math.sin(origX * 0.28 + time) * 1.1;
          const wave2 = Math.cos(origZ * 0.35 + time * 0.8) * 0.9;
          const wave3 = Math.sin((origX + origZ) * 0.2 + time * 1.2) * 0.6;

          // Interactive mouse depression / elevation
          const distToMouse = Math.sqrt(
            Math.pow(origX - mouseX, 2) + Math.pow(origZ - mouseY, 2)
          );
          const mouseEffect = Math.exp(-distToMouse * 0.35) * 2.2;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + wave3 + mouseEffect;
          pIdx++;
        }
      }

      posAttr.needsUpdate = true;
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Subtle camera tilt
      camera.position.x = mouseX * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
