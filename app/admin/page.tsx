"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SubmissionCard from '@/components/admin/SubmissionCard';
import DashboardStats from '@/components/admin/DashboardStats';

export default function AdminDashboard() {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'unread' | 'meeting'>('all');
    const router = useRouter();

    const fetchData = async () => {
        try {
            const response = await fetch('/api/admin/submissions');
            if (response.status === 401) {
                router.push('/admin/login');
                return;
            }

            const data = await response.json();
            if (data.success) {
                setSubmissions(data.submissions);
                setStats(data.stats);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    const handleMarkAsRead = async (id: string) => {
        try {
            const response = await fetch('/api/admin/submissions', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: 'read' }),
            });

            if (response.ok) {
                // Optimistic update
                setSubmissions(submissions.map(sub =>
                    sub.id === id ? { ...sub, status: 'read' } : sub
                ));
                // Update stats locally
                if (stats) {
                    setStats({ ...stats, unread: Math.max(0, stats.unread - 1) });
                }
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            const response = await fetch(`/api/admin/submissions?id=${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSubmissions(submissions.filter(sub => sub.id !== id));
                // Refresh stats
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting submission:', error);
        }
    };

    const filteredSubmissions = submissions.filter(sub => {
        if (filter === 'unread') return sub.status === 'unread';
        if (filter === 'meeting') return sub.type === 'meeting';
        return true;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-violet"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-900 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-gray-400">Manage your messages and meeting requests</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-dark-800 border border-dark-700 text-gray-300 rounded-lg hover:bg-dark-700 transition-colors"
                    >
                        Logout
                    </button>
                </header>

                {stats && <DashboardStats stats={stats} />}

                <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all'
                                ? 'bg-primary-violet text-white'
                                : 'bg-dark-800 text-gray-400 hover:text-white'
                            }`}
                    >
                        All Messages
                    </button>
                    <button
                        onClick={() => setFilter('unread')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'unread'
                                ? 'bg-primary-violet text-white'
                                : 'bg-dark-800 text-gray-400 hover:text-white'
                            }`}
                    >
                        Unread Only
                    </button>
                    <button
                        onClick={() => setFilter('meeting')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'meeting'
                                ? 'bg-primary-violet text-white'
                                : 'bg-dark-800 text-gray-400 hover:text-white'
                            }`}
                    >
                        Meeting Requests
                    </button>
                </div>

                <div className="space-y-4">
                    {filteredSubmissions.length === 0 ? (
                        <div className="text-center py-20 bg-dark-800/30 rounded-2xl border border-dark-800">
                            <p className="text-gray-500 text-lg">No messages found</p>
                        </div>
                    ) : (
                        filteredSubmissions.map(submission => (
                            <SubmissionCard
                                key={submission.id}
                                submission={submission}
                                onMarkAsRead={handleMarkAsRead}
                                onDelete={handleDelete}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
