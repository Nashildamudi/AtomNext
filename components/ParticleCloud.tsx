"use client";

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleCloud() {
    const pointsRef = useRef<THREE.Points>(null);

    // Better mobile detection
    const isMobile = typeof window !== 'undefined' && (
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );

    const particleCount = isMobile ? 500 : 2000; // Reduced even further for mobile

    // Generate particle positions in a spherical distribution
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Spherical distribution
            const radius = 3 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i3 + 2] = radius * Math.cos(phi);
        }

        return pos;
    }, [particleCount]);

    // GUARANTEED render loop - always runs
    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();

        // Slow rotation
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;

        // Gentle breathing scale
        const breathe = 0.95 + Math.sin(time * 0.5) * 0.15;
        pointsRef.current.scale.set(breathe, breathe, breathe);
    });

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (pointsRef.current) {
                pointsRef.current.geometry.dispose();
                (pointsRef.current.material as THREE.Material).dispose();
            }
        };
    }, []);

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={isMobile ? 0.015 : 0.02} // Smaller on mobile
                color="#7F00FF"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
