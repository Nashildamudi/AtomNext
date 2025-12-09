"use client";

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-dark-800 border-t border-dark-700 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gradient mb-4">AtonNext</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Building the future, pixel by pixel. Premium web development & digital innovation for ambitious enterprises.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: '𝕏', url: 'https://twitter.com' },
                                { icon: '◼', url: 'https://linkedin.com' },
                                { icon: '◉', url: 'https://dribbble.com' },
                                { icon: '▲', url: 'https://github.com' },
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-dark-700 rounded-lg text-gray-400 hover:bg-primary-violet hover:text-white transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-4">Services</h4>
                        <ul className="space-y-3">
                            {['Web Development', 'UI/UX Design', '3D Experiences', 'Mobile Apps', 'Consulting'].map((item, index) => (
                                <li key={index}>
                                    <a href="#services" className="text-gray-400 hover:text-primary-violet transition-colors duration-300 flex items-center gap-2">
                                        <span className="text-primary-violet">→</span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', href: '#about' },
                                { label: 'Portfolio', href: '#portfolio' },
                                { label: 'Testimonials', href: '#testimonials' },
                                { label: 'Contact', href: '#contact' },
                                { label: 'Careers', href: '#' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-gray-400 hover:text-primary-violet transition-colors duration-300 flex items-center gap-2">
                                        <span className="text-primary-violet">→</span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-4">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest insights and updates.
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="px-4 py-3 bg-dark-700 border border-dark-700 rounded-lg text-white text-sm focus:border-primary-violet focus:outline-none transition-colors duration-300"
                            />
                            <motion.button
                                className="px-4 py-3 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-sm rounded-lg hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-dark-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} AtonNext. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-primary-violet transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary-violet transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary-violet transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
