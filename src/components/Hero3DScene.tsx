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
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 26);
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

    // 2. High-Precision Technical Isometric Matrix (60 x 40)
    const cols = 60;
    const rows = 40;
    const count = cols * rows;
    const spacing = 1.05;

    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Architectural Engineering Colors: Emerald, Electric Lime & Cyber Cyan
    const color1 = new THREE.Color(isDark ? 0x8b5cf6 : 0x7c3aed); // Emerald
    const color2 = new THREE.Color(isDark ? 0x3b82f6 : 0x2563eb); // Cyan
    const color3 = new THREE.Color(isDark ? 0x6366f1 : 0x4f46e5); // Lime

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

        // Mathematical coordinate shading
        const ratio = (ix / cols + iy / rows) * 0.5;
        const mixedColor = new THREE.Color();
        if (ratio < 0.5) {
          mixedColor.lerpColors(color1, color2, ratio * 2);
        } else {
          mixedColor.lerpColors(color2, color3, (ratio - 0.5) * 2);
        }

        colors[idx * 3] = mixedColor.r;
        colors[idx * 3 + 1] = mixedColor.g;
        colors[idx * 3 + 2] = mixedColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Crisp Tech Dots
    const material = new THREE.PointsMaterial({
      size: isDark ? 0.20 : 0.16,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Blueprint Grid Lines
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
      opacity: isDark ? 0.16 : 0.08,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const meshLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(meshLines);

    // Interactive mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 14;
      targetMouseY = y * 10;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime() * 0.7;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let pIdx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const origX = originalPositions[pIdx * 3];
          const origZ = originalPositions[pIdx * 3 + 2];

          // Subdued architectural wave
          const wave1 = Math.sin(origX * 0.22 + time) * 1.1;
          const wave2 = Math.cos(origZ * 0.28 + time * 0.8) * 0.9;

          // Cursor ripple
          const distToMouse = Math.sqrt(
            Math.pow(origX - mouseX, 2) + Math.pow(origZ - mouseY, 2)
          );
          const mouseEffect = Math.exp(-distToMouse * 0.35) * 2.2;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + mouseEffect;
          pIdx++;
        }
      }

      posAttr.needsUpdate = true;
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      camera.position.x = mouseX * 0.25;
      camera.position.y = 15 - mouseY * 0.15;
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
