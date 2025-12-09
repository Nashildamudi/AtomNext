"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import TorusModel from './TorusModel';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: '🚀',
        title: 'Web Development',
        description: 'Cutting-edge web applications built with modern frameworks like Next.js, React, and TypeScript. Performance-optimized and scalable solutions that grow with your business.',
        features: ['Next.js & React', 'TypeScript', 'API Integration', 'Performance Optimization']
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Stunning, intuitive interfaces that captivate users. We combine aesthetic excellence with usability research for maximum impact and conversion.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        icon: '💡',
        title: 'Digital Consulting',
        description: 'Strategic guidance for digital transformation. We help you leverage technology to achieve your business objectives and stay ahead of the competition.',
        features: ['Strategy Planning', 'Tech Stack Selection', 'Architecture Design', 'Team Training']
    },
    {
        icon: '⚡',
        title: '3D Experiences',
        description: 'Immersive 3D web experiences using Three.js and WebGL. Create unforgettable digital experiences that set your brand apart.',
        features: ['Three.js Integration', 'WebGL Shaders', 'Interactive 3D', 'Performance Tuning']
    },
    {
        icon: '📱',
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
        features: ['React Native', 'Progressive Web Apps', 'App Store Deployment', 'Push Notifications']
    },
    {
        icon: '🔒',
        title: 'Security & DevOps',
        description: 'Robust security practices and DevOps pipelines to keep your applications safe, scalable, and always available.',
        features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Security Audits', 'Monitoring']
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || prefersReducedMotion) return;

        // Animate title on scroll
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [prefersReducedMotion]);

    return (
        <section id="services" ref={sectionRef} className="relative min-h-screen bg-dark-900 py-32 px-6">
            {/* 3D Torus Model */}
            <TorusModel />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-gradient">Our Services</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive digital solutions tailored to your unique needs
                        </p>
                    </motion.div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-dark-800 rounded-2xl p-8 overflow-hidden border border-dark-700 hover:border-primary-violet transition-all duration-500"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <motion.div
                                className="relative mb-6 text-6xl"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-primary-violet rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-violet/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 glow-violet rounded-2xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <button className="px-10 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 glow-violet">
                        View All Services →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
