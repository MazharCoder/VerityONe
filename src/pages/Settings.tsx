import React, { useState } from 'react';
import { Bell, Brain, Clock, FileText, Lock, Save, Settings as SettingsIcon, User, Users } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">Account Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center justify-center flex-col">
                  <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mb-3">
                    <User size={36} />
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Change Avatar
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>QA Engineer</option>
                    <option>Test Lead</option>
                    <option>QA Manager</option>
                    <option>Developer</option>
                    <option>Product Manager</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>(GMT-08:00) Pacific Time</option>
                    <option>(GMT-07:00) Mountain Time</option>
                    <option>(GMT-06:00) Central Time</option>
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT+00:00) UTC</option>
                    <option>(GMT+01:00) Central European Time</option>
                    <option>(GMT+05:30) Indian Standard Time</option>
                    <option>(GMT+08:00) China Standard Time</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">Security Settings</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">Two-Factor Authentication</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="enable-2fa"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="enable-2fa" className="font-medium text-gray-700">
                        Enable Two-Factor Authentication
                      </label>
                      <p className="text-sm text-gray-500">
                        Enhance your account security by requiring both a password and a verification code from your mobile device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">Session Management</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm text-gray-700 mb-3">
                    You're currently signed in on these devices:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <p className="font-medium text-gray-800">MacBook Pro - Chrome</p>
                        <p className="text-xs text-gray-500">New York, USA - Current session</p>
                      </div>
                      <span className="text-xs text-green-600 px-2 py-1 bg-green-100 rounded-full">
                        Active Now
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <p className="font-medium text-gray-800">iPhone 13 - Safari</p>
                        <p className="text-xs text-gray-500">New York, USA - Last active: 2 hours ago</p>
                      </div>
                      <button className="text-xs text-red-600 hover:text-red-800">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">Notification Settings</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-test-cases"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="email-test-cases" className="font-medium text-gray-700">
                        Test Case Updates
                      </label>
                      <p className="text-sm text-gray-500">
                        Get notified when a test case is assigned to you or changed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-bug-reports"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="email-bug-reports" className="font-medium text-gray-700">
                        Bug Reports
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive emails for new bugs, status changes, and comments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-sprint-updates"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="email-sprint-updates" className="font-medium text-gray-700">
                        Sprint Updates
                      </label>
                      <p className="text-sm text-gray-500">
                        Get notifications about sprint planning, reviews, and task assignments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-ai-insights"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="email-ai-insights" className="font-medium text-gray-700">
                        AI Insights
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive intelligent insights and recommendations from VerityONE AI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">In-App Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="app-mentions"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="app-mentions" className="font-medium text-gray-700">
                        Mentions and Comments
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive notifications when someone mentions you or comments on your items.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="app-assignments"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="app-assignments" className="font-medium text-gray-700">
                        Task Assignments
                      </label>
                      <p className="text-sm text-gray-500">
                        Get notified when you're assigned to a new task or bug.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="app-reminders"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="app-reminders" className="font-medium text-gray-700">
                        Due Date Reminders
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive reminders for upcoming due dates and deadlines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        );
      
      case 'ai-preferences':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-3">AI Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">AI Assistant Behavior</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      AI Proactiveness Level
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>High - Frequently suggest optimizations</option>
                      <option>Medium - Balanced suggestions</option>
                      <option>Low - Minimal intervention</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Controls how often the AI will proactively make suggestions.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Test Case Generation Style
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Comprehensive - Maximum coverage</option>
                      <option>Balanced - Good coverage with efficiency</option>
                      <option>Concise - Focus on critical paths</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Determines the detail level and coverage of AI-generated test cases.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">AI Features</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ai-test-generation"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="ai-test-generation" className="font-medium text-gray-700">
                        Automated Test Case Generation
                      </label>
                      <p className="text-sm text-gray-500">
                        Allow AI to automatically suggest and generate test cases based on requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ai-bug-analysis"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="ai-bug-analysis" className="font-medium text-gray-700">
                        Bug Pattern Analysis
                      </label>
                      <p className="text-sm text-gray-500">
                        Enable AI to analyze bug patterns and suggest preventive measures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ai-sprint-optimization"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="ai-sprint-optimization" className="font-medium text-gray-700">
                        Sprint Optimization
                      </label>
                      <p className="text-sm text-gray-500">
                        Allow AI to suggest optimal task prioritization and resource allocation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ai-code-suggestions"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="ai-code-suggestions" className="font-medium text-gray-700">
                        Test Script Suggestions
                      </label>
                      <p className="text-sm text-gray-500">
                        Enable AI to suggest automated test scripts based on manual test cases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-3">Data Usage for AI Training</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ai-data-usage"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="ai-data-usage" className="font-medium text-gray-700">
                        Help Improve VerityONE AI
                      </label>
                      <p className="text-sm text-gray-500">
                        Allow VerityONE to use anonymized data to improve AI features. No sensitive information or personally identifiable information will be shared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[calc(100vh-180px)] animate-[fadeIn_0.3s_ease-in-out]">
      <div className="w-64   rounded-lg shadow mr-6  bg-white overflow-y-auto   border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-medium text-gray-800">Settings</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center px-3 py-2 rounded-md ${
                  activeTab === 'account'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <User size={18} className="mr-3" />
                <span>Account</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center px-3 py-2 rounded-md ${
                  activeTab === 'security'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Lock size={18} className="mr-3" />
                <span>Security</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center px-3 py-2 rounded-md ${
                  activeTab === 'notifications'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Bell size={18} className="mr-3" />
                <span>Notifications</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('ai-preferences')}
                className={`w-full flex items-center px-3 py-2 rounded-md ${
                  activeTab === 'ai-preferences'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Brain size={18} className="mr-3" />
                <span>AI Preferences</span>
              </button>
            </li>
            <li className="pt-4 mt-4 border-t border-gray-200">
              <button
                className="w-full flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <Users size={18} className="mr-3" />
                <span>Team Management</span>
              </button>
            </li>
            <li>
              <button
                className="w-full flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <SettingsIcon size={18} className="mr-3" />
                <span>Workspace Settings</span>
              </button>
            </li>
            <li>
              <button
                className="w-full flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <FileText size={18} className="mr-3" />
                <span>Templates</span>
              </button>
            </li>
            <li>
              <button
                className="w-full flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <Clock size={18} className="mr-3" />
                <span>Audit Logs</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-auto border border-gray-200 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;