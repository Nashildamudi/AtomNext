"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!cardRef.current || !imageRef.current) return;

        // Kinetic parallax effect
        gsap.to(imageRef.current, {
            y: -20,
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative bg-dark-800 rounded-2xl p-8 overflow-hidden border border-dark-700 hover:border-primary-violet transition-all duration-500 hover:glow-violet"
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/5 to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon/Image with parallax */}
            <div
                ref={imageRef}
                className="relative mb-6 text-6xl transform group-hover:scale-110 transition-transform duration-500"
            >
                {icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-violet/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
}
