"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleCloud from './ParticleCloud';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Suspense } from 'react';

export default function WeightlessCanvas() {
    const prefersReducedMotion = useReducedMotion();

    // Don't render 3D scene if user prefers reduced motion
    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 opacity-50" />
        );
    }

    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 2]}
            className="absolute inset-0"
            style={{ background: 'transparent' }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <ParticleCloud />
                {/* Subtle orbit controls for optional user interaction */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Suspense>
        </Canvas>
    );
}
