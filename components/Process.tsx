"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingShapes from './FloatingShapes';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'Deep dive into your business goals, target audience, and competitive landscape. We define success metrics and create a detailed project roadmap.',
        duration: '1-2 weeks',
        deliverables: ['Project brief', 'Technical specification', 'Timeline & milestones'],
        icon: '🔍',
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Craft stunning UI/UX designs with interactive prototypes. We iterate based on your feedback to achieve pixel-perfect designs.',
        duration: '2-3 weeks',
        deliverables: ['Wireframes', 'High-fidelity designs', 'Interactive prototype'],
        icon: '🎨',
    },
    {
        number: '03',
        title: 'Development',
        description: 'Build your product using cutting-edge technologies. We follow agile methodology with weekly sprints and continuous integration.',
        duration: '4-12 weeks',
        deliverables: ['Clean code', 'API documentation', 'Testing suite'],
        icon: '⚡',
    },
    {
        number: '04',
        title: 'Testing & QA',
        description: 'Rigorous testing across devices and browsers. Performance optimization, security audits, and accessibility compliance.',
        duration: '1-2 weeks',
        deliverables: ['Test reports', 'Bug fixes', 'Performance audit'],
        icon: '✓',
    },
    {
        number: '05',
        title: 'Launch & Scale',
        description: 'Seamless deployment to production. We monitor performance, provide training, and offer ongoing support to ensure success.',
        duration: 'Ongoing',
        deliverables: ['Production deployment', 'Documentation', '24/7 support'],
        icon: '🚀',
    },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = sectionRef.current.querySelectorAll('.process-step');

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="process" ref={sectionRef} className="relative min-h-screen bg-dark-900 py-32 px-6 overflow-hidden">
            {/* 3D Background */}
            <FloatingShapes />

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
                        <span className="text-gradient">Our Process</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        A proven methodology refined over hundreds of successful projects
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-violet via-primary-blue to-primary-violet opacity-30"></div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`process-step grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                                    <motion.div
                                        className={`inline-block ${index % 2 === 0 ? 'lg:float-right' : ''}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="text-6xl md:text-8xl font-bold text-primary-violet/20">
                                            {step.number}
                                        </span>
                                    </motion.div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 clear-both">
                                        {step.title}
                                    </h3>

                                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-2 bg-primary-violet/10 text-primary-violet text-sm font-semibold rounded-full border border-primary-violet/30">
                                            ⏱ Duration: {step.duration}
                                        </span>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                                            Key Deliverables
                                        </h4>
                                        <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                                            {step.deliverables.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-primary-violet">✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Icon/Visual */}
                                <div className={`${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:col-start-1 lg:row-start-1'}`}>
                                    <motion.div
                                        className="relative h-80 rounded-3xl bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-700 overflow-hidden flex items-center justify-center group hover:border-primary-violet transition-colors duration-500"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/5 to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <motion.div
                                            className="text-9xl relative z-10"
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            {step.icon}
                                        </motion.div>

                                        {/* Decorative grid */}
                                        <div className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage: 'linear-gradient(rgba(127, 0, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 0, 255, 0.5) 1px, transparent 1px)',
                                                backgroundSize: '50px 50px'
                                            }}
                                        ></div>
                                    </motion.div>
                                </div>

                                {/* Center Dot (for desktop) */}
                                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-violet to-primary-blue rounded-full border-4 border-dark-900"
                                    style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <button className="px-10 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        Start Your Project →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
