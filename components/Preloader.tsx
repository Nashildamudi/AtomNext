"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(onComplete, 600); // Wait for exit animation
                    }, 300);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Morphing Logo Shape */}
                        <motion.div
                            className="relative w-32 h-32"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 border-4 border-primary-violet"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.2), rgba(0, 240, 255, 0.2))',
                                }}
                                animate={{
                                    borderRadius: ['0%', '50%', '0%'],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>

                        {/* Brand Name */}
                        <motion.h1
                            className="text-4xl font-bold text-gradient"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            AtonNext
                        </motion.h1>

                        {/* Progress Bar */}
                        <div className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary-violet to-primary-blue"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Progress Percentage */}
                        <motion.p
                            className="text-sm text-gray-400 font-mono"
                            key={progress}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                        >
                            {progress}%
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
