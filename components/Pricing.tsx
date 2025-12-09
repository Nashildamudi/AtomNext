"use client";

import { motion } from 'framer-motion';

const pricing = [
    {
        name: 'Starter Website',
        price: '$299',
        description: 'Perfect for small businesses and personal brands',
        features: [
            '5-page responsive website',
            'Mobile-optimized design',
            'Contact form integration',
            'Fast loading (under 2s)',
            'SEO-friendly structure',
            '1 week delivery',
        ],
        icon: '⭐',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Business Website',
        price: '$799',
        description: 'Ideal for growing businesses',
        features: [
            '10-page custom website',
            'Advanced animations',
            'E-commerce ready',
            'CMS integration',
            'Analytics setup',
            '2-3 weeks delivery',
        ],
        icon: '🚀',
        gradient: 'from-blue-500 to-cyan-500',
        popular: true,
    },
    {
        name: 'Premium Custom',
        price: '$1,499',
        description: 'For complex web applications',
        features: [
            'Unlimited pages',
            'Custom features & APIs',
            '3D graphics & WebGL',
            'Advanced integrations',
            'Priority support',
            '4-8 weeks delivery',
        ],
        icon: '💼',
        gradient: 'from-emerald-500 to-green-500',
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
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
                        <span className="text-gradient">Simple, Transparent Pricing</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Choose the package that fits your needs. All prices are starting rates.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-dark-800/50 rounded-3xl p-8 border ${plan.popular ? 'border-primary-violet shadow-2xl shadow-primary-violet/20' : 'border-dark-700'
                                } hover:border-primary-violet transition-all duration-500`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-violet to-primary-blue text-white text-sm font-bold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            {/* Icon */}
                            <div className="text-6xl mb-4">{plan.icon}</div>

                            {/* Plan Name */}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                                <span className="text-gray-400 text-sm ml-2">starting at</span>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-primary-violet mt-1">✓</span>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <button
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-primary-violet to-primary-blue text-white hover:scale-105'
                                        : 'border-2 border-primary-violet text-primary-violet hover:bg-primary-violet hover:text-white'
                                    }`}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get Started →
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-400">
                        Need something custom? <button className="text-primary-violet font-semibold hover:underline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Let's talk</button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
