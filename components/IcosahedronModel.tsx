"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpinningIcosahedron() {
    const icoRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!icoRef.current) return;
        const time = state.clock.getElapsedTime();
        icoRef.current.rotation.x = time * 0.15;
        icoRef.current.rotation.y = time * 0.25;
        icoRef.current.position.y = Math.cos(time * 0.6) * 0.4;
        icoRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
    });

    return (
        <Icosahedron ref={icoRef} args={[1.5, 0]} scale={1.2}>
            <MeshDistortMaterial
                color="#7F00FF"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.8}
                transparent
                opacity={0.7}
            />
        </Icosahedron>
    );
}

export default function IcosahedronModel() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-50">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F0FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7F00FF" />
                <SpinningIcosahedron />
            </Canvas>
        </div>
    );
}
