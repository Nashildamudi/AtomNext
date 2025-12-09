"use client";

import { motion } from 'framer-motion';

const guarantees = [
    {
        icon: '⭐',
        title: '100% Satisfaction Guarantee',
        description: 'We work with you until you are completely happy with the result',
    },
    {
        icon: '⚡',
        title: 'On-Time Delivery',
        description: 'We meet deadlines — or work extra at no additional cost',
    },
    {
        icon: '🛠️',
        title: '30-Day Free Support',
        description: 'Post-launch support included for a full month after delivery',
    },
    {
        icon: '🔍',
        title: 'Transparent Updates',
        description: 'Weekly progress reports so you are always in the loop',
    },
];

export default function Guarantees() {
    return (
        <section className="relative bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Our Guarantees</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Your peace of mind is our priority
                    </p>
                </motion.div>

                {/* Guarantees Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guarantees.map((guarantee, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 hover:border-primary-violet transition-all duration-500 text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-6xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {guarantee.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                                {guarantee.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {guarantee.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="inline-block bg-dark-800/50 rounded-2xl px-8 py-6 border border-dark-700">
                        <p className="text-gray-300 text-lg">
                            <span className="text-primary-violet font-bold">Risk-Free</span> — Work with confidence
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
