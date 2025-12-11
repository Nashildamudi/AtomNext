"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (data.success) {
                router.push('/admin');
            } else {
                setError(data.message || 'Invalid password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-2xl"
            >
                <h1 className="text-3xl font-bold text-white mb-2 text-center">Admin Access</h1>
                <p className="text-gray-400 text-center mb-8">Enter your password to continue</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-6 py-4 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none transition-colors duration-300"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-8 py-4 bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                    >
                        {loading ? 'Verifying...' : 'Login'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
