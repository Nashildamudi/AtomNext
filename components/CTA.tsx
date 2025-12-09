"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import IcosahedronModel from './IcosahedronModel';

export default function CTA() {
    return (
        <section className="relative min-h-[60vh] bg-dark-900 py-32 px-6 overflow-hidden">
            {/* 3D Background */}
            <IcosahedronModel />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 to-primary-blue/10"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        <span className="text-gradient">Ready to Start Building?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Let's transform your vision into an exceptional digital experience that drives real business results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.button
                            className="px-10 py-5 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-bold text-lg rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 glow-violet"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Your Project →
                        </motion.button>

                        <motion.button
                            className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-dark-900 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = 'mailto:hello@atonnext.com?subject=Schedule a Call'}
                        >
                            Schedule a Call
                        </motion.button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { stat: '50+', label: 'Clients' },
                            { stat: '100+', label: 'Projects' },
                            { stat: '99.9%', label: 'Uptime' },
                            { stat: '24/7', label: 'Support' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {item.stat}
                                </div>
                                <div className="text-gray-400 text-sm">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
