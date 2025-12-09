"use client";

import { motion } from 'framer-motion';
import { glimmer } from '@/lib/animations';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 overflow-hidden"
        >
            <span className="relative z-10">{children}</span>

            {/* Glimmer underline effect */}
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-violet to-primary-blue"
                variants={glimmer}
                initial="initial"
                whileHover="hover"
            />
        </a>
    );
}
