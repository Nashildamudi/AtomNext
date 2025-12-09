"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleCloud from './ParticleCloud';
import { Suspense, useEffect, useRef, useState } from 'react';

export default function WeightlessCanvas() {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [hasWebGL, setHasWebGL] = useState(true);

    useEffect(() => {
        // Check WebGL support
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                console.error('[WeightlessCanvas] WebGL not supported');
                setHasWebGL(false);
            } else {
                console.log('[WeightlessCanvas] WebGL initialized successfully');
            }
        } catch (e) {
            console.error('[WeightlessCanvas] WebGL check failed:', e);
            setHasWebGL(false);
        }

        // Handle WebGL context loss globally
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            console.warn('[WeightlessCanvas] WebGL context lost, attempting recovery...');
        };

        const handleContextRestored = () => {
            console.log('[WeightlessCanvas] WebGL context restored');
            setHasWebGL(true);
        };

        window.addEventListener('webglcontextlost', handleContextLost);
        window.addEventListener('webglcontextrestored', handleContextRestored);

        return () => {
            window.removeEventListener('webglcontextlost', handleContextLost);
            window.removeEventListener('webglcontextrestored', handleContextRestored);
        };
    }, []);

    if (!hasWebGL) {
        return (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 opacity-50" />
        );
    }

    return (
        <div ref={canvasRef} className="absolute inset-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
                className="absolute inset-0"
                style={{
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    touchAction: 'pan-y' // Allow vertical scroll on mobile
                }}
                gl={{
                    antialias: false, // DISABLED for mobile performance
                    alpha: true,
                    powerPreference: 'high-performance',
                    stencil: false, // Disable stencil buffer for performance
                    depth: true,
                    preserveDrawingBuffer: false, // Better mobile performance
                    failIfMajorPerformanceCaveat: false, // Don't fail on slow devices
                }}
                performance={{
                    min: 0.1, // Allow quality to drop very low if needed
                    max: 1,
                    debounce: 200
                }}
                frameloop="always" // ALWAYS render, never pause
                onCreated={(state) => {
                    console.log('[WeightlessCanvas] Canvas created, renderer:', state.gl.capabilities);
                    // Force initial render
                    state.gl.render(state.scene, state.camera);
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <ParticleCloud />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        enableDamping
                        dampingFactor={0.05}
                        // Touch support
                        touches={{
                            ONE: 0, // Disable one-finger rotate
                            TWO: 0  // Disable two-finger pan
                        }}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
