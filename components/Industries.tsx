"use client";

import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

const offerings = [
    {
        icon: '⚡',
        title: 'Modern Website Design',
        description: 'Clean, fast, and professional websites with a premium look.',
    },
    {
        icon: '📱',
        title: 'Responsive Development',
        description: 'Perfect experience on mobile, tablet, and desktop.',
    },
    {
        icon: '🚀',
        title: 'High-Conversion Landing Pages',
        description: 'Pages crafted to convert visitors into customers.',
    },
    {
        icon: '🛒',
        title: 'E-Commerce Websites',
        description: 'Smooth, secure online stores built for sales.',
    },
    {
        icon: '⚙️',
        title: 'Custom Web Applications',
        description: 'Tailored features and dashboards built to your needs.',
    },
    {
        icon: '🔍',
        title: 'SEO-Optimized Structure',
        description: 'Websites built to rank faster and attract organic traffic.',
    },
    {
        icon: '⚡',
        title: 'Blazing Performance',
        description: 'Optimized for speed, reliability, and user experience.',
    },
    {
        icon: '🔐',
        title: 'Secure Architecture',
        description: 'Best-practice security for safe browsing and transactions.',
    },
];

export default function WhatWeBuild() {
    return (
        <section id="what-we-build" className="relative min-h-screen bg-dark-900 py-32 px-6">
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
                        <span className="text-gradient">What We Build</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Modern, high-performance websites designed to grow your business
                    </p>
                </motion.div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            className="group bg-dark-800/50 rounded-2xl p-6 border border-dark-700 hover:border-primary-violet transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-5xl mb-4"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {offering.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                                {offering.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {offering.description}
                            </p>
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
                    <button
                        className="px-10 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-lg hover:scale-105 transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Start Your Project →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
