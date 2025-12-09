"use client";

import { motion } from 'framer-motion';

const timelines = [
    {
        type: 'Landing Page',
        duration: '5-7 days',
        description: 'Single-page website perfect for campaigns or product launches',
        icon: '📄',
    },
    {
        type: 'Business Website',
        duration: '10-15 days',
        description: 'Multi-page site with custom design and advanced features',
        icon: '🏢',
    },
    {
        type: 'E-Commerce Store',
        duration: '2-3 weeks',
        description: 'Full online store with payment integration and cart',
        icon: '🛒',
    },
    {
        type: 'Custom Web App',
        duration: '4-8 weeks',
        description: 'Complex applications with custom features and integrations',
        icon: '⚙️',
    },
];

export default function Timeline() {
    return (
        <section className="relative bg-dark-900 py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Project Timeline</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        How long does it take to build your website?
                    </p>
                </motion.div>

                {/* Timeline Items */}
                <div className="space-y-6">
                    {timelines.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 hover:border-primary-violet transition-all duration-500 group"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                {/* Icon */}
                                <motion.div
                                    className="text-6xl"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                                        {item.type}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Duration */}
                                <div className="bg-gradient-to-r from-primary-violet to-primary-blue px-6 py-3 rounded-full">
                                    <span className="text-white font-bold text-lg whitespace-nowrap">
                                        {item.duration}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-400 mb-4">
                        Timelines may vary based on project complexity and your feedback speed
                    </p>
                    <button
                        className="px-8 py-3 border-2 border-primary-violet text-primary-violet font-semibold rounded-lg hover:bg-primary-violet hover:text-white transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Your Timeline →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
