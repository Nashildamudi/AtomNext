"use client";

import { motion } from 'framer-motion';
import CubeModel from './CubeModel';

const advantages = [
    {
        icon: '⚡',
        title: '1-2 Second Load Times',
        description: 'Lightning-fast websites that keep visitors engaged',
    },
    {
        icon: '🎨',
        title: 'Pixel-Perfect UI',
        description: 'Beautiful designs that work flawlessly on every device',
    },
    {
        icon: '🛠️',
        title: 'Modern Tech Stack',
        description: 'Built with Next.js, React, and TypeScript for reliability',
    },
    {
        icon: '🤝',
        title: '24/7 Support',
        description: 'We are here whenever you need us',
    },
    {
        icon: '🚀',
        title: 'Fast Delivery',
        description: 'Quick turnaround without compromising quality',
    },
    {
        icon: '🔐',
        title: 'Security-First',
        description: 'Best practices in code security and data protection',
    },
    {
        icon: '📈',
        title: 'Results-Focused',
        description: 'Every feature designed to achieve your business goals',
    },
    {
        icon: '💯',
        title: '100% Satisfaction',
        description: 'We do not stop until you are completely happy',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative min-h-screen bg-dark-900 py-32 px-6">
            {/* 3D Background */}
            <CubeModel />

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
                        <span className="text-gradient">Why Choose AtonNext</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        We combine technical excellence with business focus to deliver exceptional results
                    </p>
                </motion.div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700 hover:border-primary-violet transition-all duration-500 group"
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
                                {advantage.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                                {advantage.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {advantage.description}
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
                        Experience the Difference →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
