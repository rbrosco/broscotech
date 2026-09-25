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

    // 1. Scene, Camera & WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 16, 28);
    camera.lookAt(0, -1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // 2. High-Density Wave Grid (65 x 45 = 2,925 interactive nodes)
    const cols = 65;
    const rows = 45;
    const count = cols * rows;
    const spacing = 0.95;

    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color(isDark ? 0x6366f1 : 0x4f46e5); // Indigo
    const color2 = new THREE.Color(isDark ? 0x06b6d4 : 0x0284c7); // Cyan
    const color3 = new THREE.Color(isDark ? 0xa855f7 : 0x7c3aed); // Violet

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

        // Dynamic Color Gradient across the 3D wave plane
        const ratio = (ix / cols + iy / rows) * 0.5;
        const finalColor = new THREE.Color();
        if (ratio < 0.5) {
          finalColor.lerpColors(color1, color2, ratio * 2);
        } else {
          finalColor.lerpColors(color2, color3, (ratio - 0.5) * 2);
        }

        colors[idx * 3] = finalColor.r;
        colors[idx * 3 + 1] = finalColor.g;
        colors[idx * 3 + 2] = finalColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Shader Material (Sharper, Glowing Particles)
    const material = new THREE.PointsMaterial({
      size: isDark ? 0.22 : 0.18,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.95 : 0.75,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Glowing Wireframe Mesh Lines
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
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.28 : 0.14,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const meshLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(meshLines);

    // Dynamic Lights for 3D depth
    const light1 = new THREE.PointLight(0x6366f1, isDark ? 6 : 3, 40);
    light1.position.set(0, 15, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x06b6d4, isDark ? 5 : 2.5, 40);
    light2.position.set(-15, 10, -5);
    scene.add(light2);

    // Mouse Tracking with smooth fluid dampening
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
      targetMouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 1.5;

      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let pIdx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const origX = originalPositions[pIdx * 3];
          const origZ = originalPositions[pIdx * 3 + 2];

          // Rich Multi-Harmonic Waves with enhanced amplitude
          const wave1 = Math.sin(origX * 0.25 + time) * 1.6;
          const wave2 = Math.cos(origZ * 0.32 + time * 0.9) * 1.3;
          const wave3 = Math.sin((origX + origZ) * 0.18 + time * 1.3) * 0.9;

          // Interactive Cursor Vortex
          const distToMouse = Math.sqrt(
            Math.pow(origX - mouseX, 2) + Math.pow(origZ - mouseY, 2)
          );
          const mouseEffect = Math.exp(-distToMouse * 0.28) * 3.4;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + wave3 + mouseEffect;
          pIdx++;
        }
      }

      posAttr.needsUpdate = true;
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Dynamic Camera Swivel
      camera.position.x = mouseX * 0.4;
      camera.position.y = 16 - mouseY * 0.2;
      camera.lookAt(0, -1, 0);

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
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    />
  );
}
