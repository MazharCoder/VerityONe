import React from 'react';
import SummaryWidgets from '../components/dashboard/SummaryWidgets';
import RecentActivity from '../components/dashboard/RecentActivity';
import AIRecommendations from '../components/dashboard/AIRecommendations';

const Dashboard = () => {
  return (
    <div className="space-y-6  animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-3">
          <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="all_time">All Time</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
            Export
          </button>
        </div>
      </div>
      
      <SummaryWidgets />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <AIRecommendations />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;