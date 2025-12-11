interface StatsProps {
    stats: {
        total: number;
        unread: number;
        recentCount: number;
        contactForms: number;
        meetingRequests: number;
    };
}

export default function DashboardStats({ stats }: StatsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
                <p className="text-gray-400 text-sm mb-1">Total Messages</p>
                <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>

            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-gray-400 text-sm mb-1">Unread</p>
                    <p className="text-3xl font-bold text-primary-violet">{stats.unread}</p>
                </div>
                {stats.unread > 0 && (
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-violet/20 rounded-full blur-xl"></div>
                )}
            </div>

            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
                <p className="text-gray-400 text-sm mb-1">Meetings</p>
                <p className="text-3xl font-bold text-blue-400">{stats.meetingRequests}</p>
            </div>

            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
                <p className="text-gray-400 text-sm mb-1">This Week</p>
                <p className="text-3xl font-bold text-green-400">{stats.recentCount}</p>
            </div>
        </div>
    );
}
