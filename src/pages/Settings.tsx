import React, { useState } from 'react';
import { Bell, Brain, Lock, Save, Settings as SettingsIcon, User } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>('account');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={32} className="text-gray-400" />
                  </div>
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Change
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                  value="QA Engineer"
                  disabled
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Security Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Update Password
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Notification Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Test Case Updates</h3>
                  <p className="text-sm text-gray-600">Get notified when a test case is updated</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"     className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Bug Reports</h3>
                  <p className="text-sm text-gray-600">Receive notifications for new bug reports</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">AI Insights</h3>
                  <p className="text-sm text-gray-600">Get AI-powered recommendations and insights</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Team Updates</h3>
                  <p className="text-sm text-gray-600">Stay informed about team activities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">AI Settings</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Brain className="text-purple-600 mr-2" size={20} />
                  <h3 className="text-sm font-medium text-purple-800">AI Assistant Configuration</h3>
                </div>
                <p className="text-sm text-purple-700 mt-1">
                  Customize how the AI assistant works with your testing workflow
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">AI Model Selection</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Standard (Recommended)</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Test Generation Style</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Balanced</option>
                    <option>Thorough</option>
                    <option>Quick</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Language Preference</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Save AI Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-180px)] animate-[fadeIn_0.3s_ease-in-out] gap-6">
      {/* Sidebar */}
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
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                  activeTab === 'account'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <User size={18} className="mr-2" />
                <span>Account</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                  activeTab === 'security'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Lock size={18} className="mr-2" />
                <span>Security</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                  activeTab === 'notifications'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Bell size={18} className="mr-2" />
                <span>Notifications</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('ai')}
                className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                  activeTab === 'ai'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Brain size={18} className="mr-2" />
                <span>AI Settings</span>
              </button>
            </li>
          </ul>
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
      
      {/* Main content */}
      <div className="flex-1 bg-white rounded-lg shadow overflow-auto border border-gray-200 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;