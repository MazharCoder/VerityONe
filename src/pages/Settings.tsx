import React, { useState } from 'react';
import { Bell, Brain, Clock, FileText, Lock, Save, Settings as SettingsIcon, User, Users } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderTabContent = () => {
    // ... existing renderTabContent code remains unchanged
  };

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-180px)] animate-[fadeIn_0.3s_ease-in-out] gap-6">
      <div className={`
        fixed sm:relative inset-0 z-30 bg-white w-64 transform transition-transform duration-300 ease-in-out
        sm:transform-none sm:w-64 rounded-lg shadow mr-0 sm:mr-6 border border-gray-200 overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
      `}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-medium text-gray-800">Settings</h2>
          <button 
            className="sm:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          {/* ... existing navigation code remains unchanged */}
        </nav>
      </div>

      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Mobile menu button */}
      <button
        className="fixed bottom-4 right-4 sm:hidden z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(true)}
      >
        <SettingsIcon size={24} />
      </button>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-auto border border-gray-200 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;