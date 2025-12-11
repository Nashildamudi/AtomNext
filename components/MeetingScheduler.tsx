"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { countryCodes } from '@/lib/countryCodes';

interface MeetingSchedulerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MeetingScheduler({ isOpen, onClose }: MeetingSchedulerProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string; error?: boolean } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/schedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({
                    success: true,
                    message: data.message,
                });
                setStep(3); // Success step
            } else {
                setSubmitStatus({
                    success: false,
                    message: data.message || 'Something went wrong.',
                    error: true
                });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Failed to schedule meeting. Please try again.',
                error: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset when closed
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative z-10 w-full max-w-lg bg-dark-800 border border-dark-700 rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="p-6 border-b border-dark-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">Schedule a Consultation</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-6">
                        {step === 1 && (
                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    Choose a preferred time for us to discuss your project. We'll confirm via email.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Preferred Date</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none"
                                            value={formData.preferredDate}
                                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Preferred Time</label>
                                        <select
                                            className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none"
                                            value={formData.preferredTime}
                                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                        >
                                            <option value="">Select time</option>
                                            <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                                            <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                                            <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        if (formData.preferredDate && formData.preferredTime) {
                                            setStep(2);
                                        } else {
                                            alert('Please select a date and time');
                                        }
                                    }}
                                    className="w-full py-3 bg-primary-violet text-white font-semibold rounded-xl hover:bg-primary-violet/90 transition-colors"
                                >
                                    Next Step →
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {submitStatus?.error && (
                                    <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-lg">
                                        {submitStatus.message}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select
                                            className="w-1/3 px-2 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none text-sm"
                                            value={formData.countryCode}
                                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                        >
                                            <option value="">Code</option>
                                            {countryCodes.map((country) => (
                                                <option key={country.code} value={country.dial_code}>
                                                    {country.name} ({country.dial_code})
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            required
                                            className="w-2/3 px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="1234567890"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Topic</label>
                                    <textarea
                                        required
                                        rows={3}
                                        className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-white focus:border-primary-violet focus:outline-none resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="What would you like to discuss?"
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="flex-1 py-3 bg-dark-700 text-white font-semibold rounded-xl hover:bg-dark-600 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-[2] py-3 bg-primary-violet text-white font-semibold rounded-xl hover:bg-primary-violet/90 transition-colors disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Scheduling...' : 'Confirm Meeting'}
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                    ✓
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Meeting Requested!</h4>
                                <p className="text-gray-400 mb-6">
                                    We've received your meeting request. We'll be in touch shortly to confirm the details.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-dark-700 text-white font-semibold rounded-xl hover:bg-dark-600 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
