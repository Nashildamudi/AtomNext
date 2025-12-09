"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube() {
    const cubeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!cubeRef.current) return;
        const time = state.clock.getElapsedTime();
        cubeRef.current.rotation.x = time * 0.2;
        cubeRef.current.rotation.y = time * 0.3;
        cubeRef.current.rotation.z = time * 0.1;
        cubeRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    });

    return (
        <Box ref={cubeRef} args={[2, 2, 2]}>
            <MeshDistortMaterial
                color="#00F0FF"
                attach="material"
                distort={0.3}
                speed={1.5}
                roughness={0.3}
                transparent
                opacity={0.6}
            />
        </Box>
    );
}

export default function CubeModel() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#7F00FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <FloatingCube />
            </Canvas>
        </div>
    );
}
