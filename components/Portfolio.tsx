"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingShapes from './FloatingShapes';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const project = {
    title: 'Sandalwood Estate',
    client: 'Sandalwood Estate',
    year: '2024',
    category: 'Real Estate Website',
    description: 'A modern, elegant website for a premium real estate property. Features stunning property showcases, responsive design, and seamless user experience to attract potential buyers and investors.',
    results: [
        'Modern, professional design',
        'Fully responsive across all devices',
        'Fast loading and optimized',
        'Enhanced property presentation',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
        'Property showcase galleries',
        'Mobile-optimized layout',
        'Contact integration',
        'Smooth animations',
    ],
    gradient: 'from-emerald-600 via-green-600 to-emerald-600',
    imageGradient: 'from-emerald-500/20 to-green-500/20',
};

export default function Portfolio() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const card = sectionRef.current.querySelector('.project-card');

        if (card) {
            gsap.fromTo(
                card,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="portfolio" ref={sectionRef} className="relative min-h-screen bg-dark-900 py-32 px-6 overflow-hidden">
            {/* 3D Background */}
            <FloatingShapes />

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Featured Project</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Our latest work showcasing excellence in web development
                    </p>
                </motion.div>

                {/* Project */}
                <div className="project-card max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image/Visual Side */}
                        <motion.div
                            className={`relative h-[500px] rounded-3xl bg-gradient-to-br ${project.imageGradient} border border-dark-700 overflow-hidden`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}></div>

                            {/* Project visual representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-9xl font-bold text-white/10 mb-6">
                                        🏡
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-3">{project.client}</div>
                                    <div className="text-primary-violet font-semibold text-xl">{project.year}</div>
                                </div>
                            </div>

                            {/* Decorative grid */}
                            <div className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
                                    backgroundSize: '50px 50px'
                                }}
                            ></div>
                        </motion.div>

                        {/* Content Side */}
                        <div className="space-y-6">
                            <motion.span
                                className="inline-block px-4 py-2 bg-primary-violet/20 text-primary-violet text-sm font-bold rounded-full border border-primary-violet/30"
                                whileHover={{ scale: 1.05 }}
                            >
                                {project.category}
                            </motion.span>

                            <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                                {project.title}
                            </h3>

                            <p className="text-lg text-gray-400 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Key Results */}
                            <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-primary-violet">✨</span>
                                    Key Features
                                </h4>
                                <ul className="space-y-2">
                                    {project.results.map((result, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-primary-violet mt-1">✓</span>
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-white font-semibold mb-3 text-sm">Built With</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-dark-800 text-gray-300 text-sm rounded-lg border border-dark-700 hover:border-primary-violet transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.button
                                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                                whileHover={{ x: 5 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Start Your Project
                                <span className="text-xl">→</span>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="text-gray-400 mb-6 text-lg">
                        Ready to bring your vision to life?
                    </p>
                    <button
                        className="px-10 py-4 border-2 border-primary-violet text-primary-violet font-semibold text-lg rounded-lg hover:bg-primary-violet hover:text-white transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Let's Talk About Your Project →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
