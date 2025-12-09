"use client";

import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

const capabilities = [
    {
        category: 'Modern Websites & Apps',
        icon: '🌐',
        description: 'Beautiful, fast, and responsive websites that work perfectly on all devices',
        benefits: [
            'Lightning-fast load times',
            'Mobile-friendly design',
            'SEO optimized',
            'Easy to update',
        ],
        color: 'from-purple-500 to-pink-500',
    },
    {
        category: 'Interactive Experiences',
        icon: '✨',
        description: '3D graphics and animations that make your website stand out',
        benefits: [
            'Engaging 3D visuals',
            'Smooth animations',
            'Interactive elements',
            'Memorable experiences',
        ],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        category: 'Secure & Reliable',
        icon: '🔒',
        description: 'Enterprise-grade security and rock-solid infrastructure',
        benefits: [
            'Bank-level security',
            '99.9% uptime guarantee',
            'Automatic backups',
            'GDPR compliant',
        ],
        color: 'from-green-500 to-emerald-500',
    },
    {
        category: 'AI & Innovation',
        icon: '🚀',
        description: 'Cutting-edge features that give you a competitive advantage',
        benefits: [
            'AI-powered features',
            'Smart automations',
            'Real-time updates',
            'Future-proof tech',
        ],
        color: 'from-orange-500 to-red-500',
    },
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="relative min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
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
                        Modern technology that drives real business results
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            className="group bg-dark-800/50 rounded-3xl p-10 border border-dark-700 hover:border-primary-violet transition-all duration-500 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon & Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <motion.span
                                        className="text-6xl"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {capability.icon}
                                    </motion.span>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {capability.category}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                            {capability.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="space-y-3 mt-6">
                                    {capability.benefits.map((benefit, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-3 text-gray-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
                                        >
                                            <span className="w-2 h-2 bg-primary-violet rounded-full flex-shrink-0"></span>
                                            <span className="text-base">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choice Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {[
                        {
                            icon: '⚡',
                            title: 'Built for Speed',
                            description: 'Your website loads in under 2 seconds, keeping visitors engaged',
                        },
                        {
                            icon: '📈',
                            title: 'Scalable Solutions',
                            description: 'Grows with your business from startup to enterprise',
                        },
                        {
                            icon: '🎯',
                            title: 'Results-Driven',
                            description: 'Every feature is designed to help you achieve your business goals',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-8 bg-dark-800/20 rounded-2xl border border-dark-700 hover:border-primary-violet transition-all duration-300"
                            whileHover={{ scale: 1.03, y: -5 }}
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="inline-block bg-dark-800/50 rounded-full px-8 py-4 border border-dark-700">
                        <p className="text-gray-400 text-sm">
                            <span className="text-primary-violet font-bold">100+</span> projects built with modern, reliable technology
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
