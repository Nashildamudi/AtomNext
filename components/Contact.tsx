"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import IcosahedronModel from './IcosahedronModel';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="relative min-h-screen bg-dark-900 py-32 px-6 overflow-hidden">
            {/* 3D Icosahedron Model */}
            <IcosahedronModel />

            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-violet/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Let's Build Something Amazing</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Ready to transform your vision into reality? Get in touch with us today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 font-semibold mb-2">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none transition-colors duration-300"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none transition-colors duration-300"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-semibold mb-2">Company</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-6 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none transition-colors duration-300"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-semibold mb-2">Project Details</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-6 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 glow-violet"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message →
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Quick Contact */}
                        <div className="bg-dark-800/50 p-8 rounded-2xl border border-dark-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:hello@atonnext.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-primary-violet transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-2xl">📧</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-semibold">hello@atonnext.com</p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="tel:+15551234567"
                                    className="flex items-center gap-4 text-gray-300 hover:text-primary-violet transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-2xl">📱</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-semibold">+1 (555) 123-4567</p>
                                    </div>
                                </motion.a>

                                <motion.div
                                    className="flex items-center gap-4 text-gray-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-semibold">San Francisco, CA</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-dark-800/50 p-8 rounded-2xl border border-dark-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>

                            <div className="flex gap-4">
                                {[
                                    { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
                                    { icon: '◼', label: 'LinkedIn', url: 'https://linkedin.com' },
                                    { icon: '◉', label: 'Dribbble', url: 'https://dribbble.com' },
                                    { icon: '▲', label: 'GitHub', url: 'https://github.com' },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-14 h-14 flex items-center justify-center bg-dark-700 rounded-xl text-2xl text-gray-400 hover:bg-primary-violet hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <motion.div
                            className="bg-gradient-to-br from-primary-violet/20 to-primary-blue/20 p-8 rounded-2xl border border-primary-violet/50 relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 to-primary-blue/10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">Ready to Start?</h3>
                                <p className="text-gray-300 mb-4">
                                    Book a free 30-minute consultation to discuss your project.
                                </p>
                                <button
                                    className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                    onClick={() => window.location.href = 'mailto:hello@atonnext.com?subject=Schedule a Free Consultation'}
                                >
                                    Schedule Call →
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
