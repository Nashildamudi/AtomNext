"use client";

import { motion } from 'framer-motion';
import CubeModel from './CubeModel';

const team = [
    {
        name: 'Ruvaid',
        role: 'Marketing & SEO Specialist',
        specialty: 'Digital Marketing & Growth',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Jafar',
        role: 'Frontend Developer',
        specialty: 'React & UI Development',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Nasheel',
        role: 'Backend Developer',
        specialty: 'Server & Database Architecture',
        gradient: 'from-green-500 to-emerald-500',
    },
];

export default function About() {
    return (
        <section id="about" className="relative min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
            {/* 3D Cube Model */}
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
                        <span className="text-gradient">About AtonNext</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're a team of passionate creators, designers, and developers pushing the boundaries of what's possible on the web.
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    className="max-w-4xl mx-auto mb-20 p-10 bg-dark-800/50 rounded-3xl border border-dark-700 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-violet via-primary-blue to-primary-violet"></div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                        At AtonNext, we believe the web should be a canvas for extraordinary experiences. We combine cutting-edge technology with artistic vision to create digital products that don't just work—they inspire.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        From immersive 3D environments to pixel-perfect interfaces, we craft every detail with precision and passion.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div>
                    <motion.h3
                        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet The Team
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Avatar */}
                                <motion.div
                                    className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${member.gradient} mb-4 flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-colors duration-300"></div>
                                    <span className="relative z-10">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                </motion.div>

                                {/* Info */}
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                    <p className="text-primary-violet font-semibold mb-2">{member.role}</p>
                                    <p className="text-sm text-gray-500">{member.specialty}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {[
                        {
                            icon: '💎',
                            title: 'Quality First',
                            description: 'We never compromise on excellence. Every pixel, every interaction, perfected.',
                        },
                        {
                            icon: '🚀',
                            title: 'Innovation Driven',
                            description: 'Pushing boundaries with the latest technologies and creative approaches.',
                        },
                        {
                            icon: '🤝',
                            title: 'Client Focused',
                            description: 'Your success is our success. We build lasting partnerships, not just projects.',
                        },
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-8 bg-dark-800/30 rounded-2xl border border-dark-700 hover:border-primary-violet transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-3">{value.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
