"use client";

import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animations';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
    return (
        <motion.div
            className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-700 relative overflow-hidden"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* Quote Icon */}
            <div className="text-6xl text-primary-violet/20 mb-4">"</div>

            {/* Quote Text */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                {quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center text-white font-bold text-xl">
                    {author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-semibold">{author}</h4>
                    <p className="text-gray-400 text-sm">{role} at {company}</p>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/10 to-transparent rounded-bl-full" />
        </motion.div>
    );
}
