"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold">
                    <span className="text-gradient">AtonNext</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href="#home"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Services
                    </a>
                    <a
                        href="#portfolio"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Work
                    </a>
                    <a
                        href="#process"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Process
                    </a>
                    <a
                        href="#about"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact
                    </a>
                </div>

                {/* CTA Button */}
                <button
                    className="hidden md:block px-6 py-2 border border-primary-violet text-primary-violet hover:bg-primary-violet hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Get Started
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}
