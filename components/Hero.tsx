"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WeightlessCanvas from './WeightlessCanvas';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const sublineRef = useRef<HTMLParagraphElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!heroRef.current || !headlineRef.current || prefersReducedMotion) return;

        // Staggered text reveal animation
        const words = headlineRef.current.querySelectorAll('.word');

        gsap.fromTo(
            words,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power4.out',
                stagger: 0.05,
                delay: 0.5,
            }
        );

        // Subline fade in
        if (sublineRef.current) {
            gsap.fromTo(
                sublineRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out', delay: 1.2 }
            );
        }

        // ScrollTrigger: Shrink and pin hero on scroll
        if (canvasContainerRef.current) {
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: '+=500',
                scrub: 1,
                pin: false,
                onUpdate: (self) => {
                    const scale = 1 - self.progress * 0.2; // Scale from 1 to 0.8
                    if (canvasContainerRef.current) {
                        gsap.to(canvasContainerRef.current, {
                            scale: scale,
                            duration: 0.1,
                            ease: 'none',
                        });
                    }
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [prefersReducedMotion]);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
        >
            {/* Three.js Background */}
            <div ref={canvasContainerRef} className="absolute inset-0 z-0">
                <WeightlessCanvas />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <h1
                    ref={headlineRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    {['atomnext:', 'Building', 'the', 'Future,', 'Pixel', 'by', 'Pixel'].map((word, i) => (
                        <span key={i} className="word inline-block mr-4 md:mr-6">
                            {i === 0 ? (
                                <span className="text-gradient">{word}</span>
                            ) : (
                                <span className="text-white">{word}</span>
                            )}
                        </span>
                    ))}
                </h1>

                <p
                    ref={sublineRef}
                    className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 opacity-0"
                >
                    Premium web development & digital innovation for tech-focused enterprises
                    and high-growth startups.
                </p>

                {/* CTA Button */}
                <button
                    className="px-8 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 glow-violet"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Start Your Project
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-primary-violet rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
