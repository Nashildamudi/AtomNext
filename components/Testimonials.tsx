"use client";

import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

const stats = [
    { number: '1', label: 'Year in Business', suffix: '+' },
    { number: '10', label: 'Projects Delivered', suffix: '+' },
    { number: '100', label: 'Code Quality', suffix: '%' },
    { number: '24/7', label: 'Support Available', suffix: '' },
];

export default function ClientsSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
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
                        <span className="text-gradient">Building Excellence</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Delivering quality web solutions with passion and precision
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-8 bg-dark-800/30 rounded-2xl border border-dark-700 group hover:border-primary-violet transition-colors duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h3
                                className="text-5xl md:text-6xl font-bold text-gradient mb-3"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                            >
                                {stat.number}{stat.suffix}
                            </motion.h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {[
                        {
                            icon: '🏆',
                            title: 'Quality First',
                            description: 'Every line of code is crafted with attention to detail',
                        },
                        {
                            icon: '⚡',
                            title: 'Fast Delivery',
                            description: 'Efficient development without compromising quality',
                        },
                        {
                            icon: '🎯',
                            title: 'Results Driven',
                            description: 'Focused on building solutions that achieve your goals',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-8 bg-dark-800/20 rounded-2xl border border-dark-700 hover:border-primary-violet transition-all duration-300"
                            whileHover={{ scale: 1.03, y: -5 }}
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
