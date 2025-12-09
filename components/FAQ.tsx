"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        question: 'What types of projects do you specialize in?',
        answer: 'We specialize in complex web applications, enterprise SaaS platforms, fintech solutions, healthcare systems, and immersive 3D experiences. Our sweet spot is projects that combine cutting-edge technology with exceptional user experience.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application can take 3-6 months. We provide detailed timelines during the discovery phase and work in agile sprints to deliver value continuously.',
    },
    {
        question: 'What is your development process?',
        answer: 'We follow a 5-phase approach: Discovery & Strategy, Design & Prototyping, Development, Testing & QA, and Launch & Scale. We use agile methodology with 2-week sprints, regular demos, and continuous client collaboration.',
    },
    {
        question: 'Do you provide ongoing support and maintenance?',
        answer: 'Yes! We offer comprehensive support packages including 24/7 monitoring, bug fixes, security updates, performance optimization, and feature enhancements. Our team is committed to your long-term success.',
    },
    {
        question: 'What technologies do you work with?',
        answer: 'We work with modern tech stacks including React, Next.js, TypeScript, Node.js, Python, Three.js for 3D, and leading cloud platforms (AWS, GCP, Azure). We select the best tools for your specific requirements.',
    },
    {
        question: 'Can you integrate with our existing systems?',
        answer: 'Absolutely. We have extensive experience integrating with third-party APIs, legacy systems, CRMs, payment processors, and enterprise software. We ensure seamless data flow and system interoperability.',
    },
    {
        question: 'What makes atomnext different from other agencies?',
        answer: 'Our unique blend of technical excellence and creative innovation sets us apart. We don\'t just build websites—we craft immersive digital experiences with advanced 3D graphics, animations, and cutting-edge web technologies.',
    },
    {
        question: 'Do you work with startups or only enterprises?',
        answer: 'We work with both! We help startups build MVPs and scale rapidly, while also delivering enterprise-grade solutions for established companies. Our flexible approach adapts to your stage and budget.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative min-h-screen bg-dark-900 py-32 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        Everything you need to know about working with us
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800/50 rounded-2xl border border-dark-700 overflow-hidden hover:border-primary-violet transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <button
                                className="w-full p-6 text-left flex justify-between items-center gap-4"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                                    {faq.question}
                                </h3>
                                <motion.span
                                    className="text-3xl text-primary-violet flex-shrink-0"
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    +
                                </motion.span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gray-400 mb-6">Still have questions?</p>
                    <button
                        className="px-8 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-lg hover:scale-105 transition-transform duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Us →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
