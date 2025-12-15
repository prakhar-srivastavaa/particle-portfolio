"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // Circular glowing particles with random motion and merging effect
    const particleCount = 1000;
    const particles = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particles[i3] = (Math.random() - 0.5) * 200;
      particles[i3 + 1] = (Math.random() - 0.5) * 200;
      particles[i3 + 2] = (Math.random() - 0.5) * 100;
      velocities[i3] = (Math.random() - 0.5) * 0.15;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.15;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.08;
      sizes[i] = Math.random() * 3.5 + 1.2;
      opacities[i] = Math.random() * 0.7 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePos: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        uniform float time;
        uniform vec3 mousePos;
        
        void main() {
          vOpacity = opacity * (0.8 + 0.2 * sin(time * 2.0 + position.x * 0.1));
          vec3 pos = position;
          float dist = distance(pos.xy, mousePos.xy);
          if (dist < 35.0) {
            float strength = 1.0 - (dist / 35.0);
            pos.xy += normalize(mousePos.xy - pos.xy) * strength * 0.5;
          }
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (350.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          
          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 2.5);
          
          vec3 color = vec3(1.0);
          float finalAlpha = strength * vOpacity;
          
          gl_FragColor = vec4(color, finalAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mousePos = new THREE.Vector3(0, 0, 0);
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      material.uniforms.time.value = time;

      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Particle merging effect - attract nearby particles
        for (let j = i + 1; j < Math.min(i + 5, particleCount); j++) {
          const j3 = j * 3;
          const dx = positions[j3] - positions[i3];
          const dy = positions[j3 + 1] - positions[i3 + 1];
          const dz = positions[j3 + 2] - positions[i3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 8 && dist > 0.1) {
            const force = 0.02 / dist;
            velocities[i3] += dx * force;
            velocities[i3 + 1] += dy * force;
            velocities[j3] -= dx * force;
            velocities[j3 + 1] -= dy * force;
          }
        }

        // Wrap boundaries
        if (Math.abs(positions[i3]) > 100) positions[i3] *= -0.95;
        if (Math.abs(positions[i3 + 1]) > 100) positions[i3 + 1] *= -0.95;
        if (Math.abs(positions[i3 + 2]) > 50) positions[i3 + 2] *= -0.95;

        // Add random motion
        velocities[i3] += (Math.random() - 0.5) * 0.01;
        velocities[i3 + 1] += (Math.random() - 0.5) * 0.01;
        velocities[i3 + 2] += (Math.random() - 0.5) * 0.005;

        // Damping
        velocities[i3] *= 0.99;
        velocities[i3 + 1] *= 0.99;
        velocities[i3 + 2] *= 0.99;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouse = (e: MouseEvent) => {
      mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.x *= (window.innerWidth / window.innerHeight) * 50;
      mousePos.y *= 50;
      material.uniforms.mousePos.value.copy(mousePos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10" />;
}
