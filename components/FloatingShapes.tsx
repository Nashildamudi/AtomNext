"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.z = time * 0.1;
    });

    return (
        <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={0.5}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={0.3}
                speed={1.5}
                roughness={0.4}
                transparent
                opacity={0.6}
            />
        </Sphere>
    );
}

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <FloatingShape position={[-3, 2, 0]} color="#7F00FF" />
                <FloatingShape position={[3, -1, -2]} color="#00F0FF" />
                <FloatingShape position={[0, 3, -1]} color="#7F00FF" />
            </Canvas>
        </div>
    );
}
