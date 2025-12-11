"use client";

import { motion } from 'framer-motion';

interface SubmissionCardProps {
    submission: {
        id: string;
        name: string;
        email: string;
        company?: string;
        message: string;
        type: 'contact' | 'meeting';
        status: 'read' | 'unread';
        timestamp: number;
        meetingDetails?: {
            preferredDate?: string;
            preferredTime?: string;
            phone?: string;
        };
    };
    onMarkAsRead: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function SubmissionCard({ submission, onMarkAsRead, onDelete }: SubmissionCardProps) {
    const date = new Date(submission.timestamp).toLocaleString();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`p-6 rounded-2xl border ${submission.status === 'unread'
                ? 'bg-dark-800 border-primary-violet/50 shadow-[0_0_15px_rgba(124,58,237,0.1)]'
                : 'bg-dark-800/50 border-dark-700'
                }`}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{submission.name}</h3>
                        {submission.status === 'unread' && (
                            <span className="px-2 py-1 bg-primary-violet/20 text-primary-violet text-xs font-bold rounded-full border border-primary-violet/20">
                                NEW
                            </span>
                        )}
                        <span className={`px-2 py-1 text-xs font-bold rounded-full border ${submission.type === 'meeting'
                            ? 'bg-blue-500/20 text-blue-400 border-blue-500/20'
                            : 'bg-green-500/20 text-green-400 border-green-500/20'
                            }`}>
                            {submission.type === 'meeting' ? 'MEETING' : 'CONTACT'}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm">{submission.email}</p>
                    {submission.company && (
                        <p className="text-gray-500 text-sm">{submission.company}</p>
                    )}
                </div>
                <span className="text-gray-500 text-xs">{date}</span>
            </div>

            <div className="bg-dark-900/50 p-4 rounded-xl mb-4 border border-dark-700/50">
                <p className="text-gray-300 whitespace-pre-wrap">{submission.message}</p>

                {submission.type === 'meeting' && submission.meetingDetails && (
                    <div className="mt-4 pt-4 border-t border-dark-700/50 flex gap-4">
                        {submission.meetingDetails.preferredDate && (
                            <div className="flex items-center gap-2 text-sm text-blue-400">
                                <span>📅</span>
                                <span>{submission.meetingDetails.preferredDate}</span>
                            </div>
                        )}
                        {submission.meetingDetails.preferredTime && (
                            <div className="flex items-center gap-2 text-sm text-blue-400">
                                <span>⏰</span>
                                <span>{submission.meetingDetails.preferredTime}</span>
                            </div>
                        )}
                        {submission.meetingDetails.phone && (
                            <div className="flex items-center gap-2 text-sm text-blue-400">
                                <span>📞</span>
                                <span>{submission.meetingDetails.phone}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="flex gap-3 justify-end">
                <a
                    href={`mailto:${submission.email}`}
                    className="px-4 py-2 bg-dark-700 text-white text-sm font-medium rounded-lg hover:bg-dark-600 transition-colors"
                >
                    Reply
                </a>

                {submission.status === 'unread' && (
                    <button
                        onClick={() => onMarkAsRead(submission.id)}
                        className="px-4 py-2 bg-primary-violet/20 text-primary-violet border border-primary-violet/20 text-sm font-medium rounded-lg hover:bg-primary-violet/30 transition-colors"
                    >
                        Mark Read
                    </button>
                )}

                <button
                    onClick={() => onDelete(submission.id)}
                    className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium rounded-lg hover:bg-red-500/20 transition-colors"
                >
                    Delete
                </button>
            </div>
        </motion.div>
    );
}
