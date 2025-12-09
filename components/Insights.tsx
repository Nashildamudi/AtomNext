"use client";

import { motion } from 'framer-motion';

const insights = [
    {
        category: 'Web Development',
        title: 'The Future of Web: WebGPU and Beyond',
        excerpt: 'Exploring how WebGPU is revolutionizing browser-based 3D graphics and what it means for the future of web applications.',
        readTime: '8 min read',
        date: 'Dec 5, 2024',
        image: 'from-purple-500 to-violet-500',
    },
    {
        category: 'Design Trends',
        title: 'Designing for Immersion: 3D UI Best Practices',
        excerpt: 'How to balance stunning 3D visuals with usability and accessibility in modern web design.',
        readTime: '6 min read',
        date: 'Nov 28, 2024',
        image: 'from-blue-500 to-cyan-500',
    },
    {
        category: 'Performance',
        title: 'Achieving Sub-Second Load Times in Next.js 14',
        excerpt: 'Advanced optimization techniques for building blazing-fast web applications with the latest Next.js features.',
        readTime: '10 min read',
        date: 'Nov 20, 2024',
        image: 'from-green-500 to-emerald-500',
    },
];

export default function Insights() {
    return (
        <section id="insights" className="relative min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-32 px-6">
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
                        <span className="text-gradient">Latest Insights</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Expert perspectives on web development, design, and digital innovation
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {insights.map((article, index) => (
                        <motion.article
                            key={index}
                            className="group bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-violet transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Featured Image */}
                            <div className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/20 transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl opacity-20">📰</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-primary-violet/20 text-primary-violet text-xs font-semibold rounded-full mb-3">
                                    {article.category}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{article.date}</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <button className="px-8 py-3 border-2 border-primary-violet text-primary-violet font-semibold rounded-lg hover:bg-primary-violet hover:text-white transition-all duration-300">
                        View All Articles →
                    </button>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    className="mt-20 max-w-2xl mx-auto bg-dark-800/50 rounded-3xl p-10 border border-dark-700 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h3 className="text-3xl font-bold text-white mb-4">Stay Informed</h3>
                    <p className="text-gray-400 mb-6">
                        Get monthly insights on web development trends, design tips, and industry news delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-6 py-3 bg-dark-700 border border-dark-700 rounded-lg text-white focus:border-primary-violet focus:outline-none transition-colors duration-300"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        Join 5,000+ professionals. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
