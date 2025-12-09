"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function RotatingTorus() {
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!torusRef.current) return;
        const time = state.clock.getElapsedTime();
        torusRef.current.rotation.x = time * 0.3;
        torusRef.current.rotation.y = time * 0.4;
        torusRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    });

    return (
        <Torus ref={torusRef} args={[1, 0.4, 16, 100]} scale={1.5}>
            <MeshDistortMaterial
                color="#7F00FF"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                transparent
                opacity={0.7}
            />
        </Torus>
    );
}

export default function TorusModel() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F0FF" />
                <RotatingTorus />
            </Canvas>
        </div>
    );
}
