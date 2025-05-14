import React from 'react';
import { X, UserCircle } from 'lucide-react';
import BugAttachments from './BugAttachments';
import BugAIInsights from './BugAIInsights';
import BugActions from './BugActions';
import BugActivity from './BugActivity';
import BugComments from './BugComments';

interface BugDetailsProps {
  bugId: number;
  onClose: () => void;
}

// Mock bug data
const bugData = {
  id: 1,
  title: 'Login not working with special characters in password',
  description: 'When attempting to login with a password that contains special characters (!, @, #, etc.), the login process fails without any error message. This happens consistently on Chrome and Firefox browsers.',
  status: 'Open',
  severity: 'High',
  priority: 'High',
  assignee: 'Mike Johnson',
  reportedBy: 'Sarah Miller',
  reportedOn: '2023-09-15',
  lastUpdated: '2 hours ago',
  environment: 'Chrome 116, Windows 11',
  version: 'v2.4.0',
  attachments: [
    { name: 'error_screenshot.png', size: '245 KB' },
    { name: 'console_log.txt', size: '12 KB' }
  ],
  activity: [
    { 
      id: 1, 
      user: 'Sarah Miller', 
      action: 'created this bug report', 
      time: '2023-09-15 10:30 AM' 
    },
    { 
      id: 2, 
      user: 'John Doe', 
      action: 'added tag "Authentication"', 
      time: '2023-09-15 11:45 AM' 
    },
    { 
      id: 3, 
      user: 'Mike Johnson', 
      action: 'changed status from "New" to "Open"', 
      time: '2023-09-15 02:15 PM' 
    },
    { 
      id: 4, 
      user: 'Mike Johnson', 
      action: 'assigned this bug to himself', 
      time: '2023-09-15 02:16 PM',
      comment: 'I\'ll take a look at this issue. Can you provide the exact special characters that are causing the problem?'
    },
    { 
      id: 5, 
      user: 'Sarah Miller', 
      action: 'added a comment', 
      time: '2023-09-16 09:20 AM',
      comment: 'I tested with these characters: !, @, #, $, and %. All of them cause the login to fail.'
    }
  ],
  aiInsights: [
    'This appears to be a string escaping issue in the authentication module',
    'Similar bugs have been reported in the past (BUG-245, BUG-378)',
    '87% confidence this is related to the recent password policy update'
  ]
};

const BugDetails: React.FC<BugDetailsProps> = ({ bugId, onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 h-full flex flex-col animate-[scaleIn_0.2s_ease-in-out]">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">Bug Report: BUG-{bugId}</h3>
        <button 
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{bugData.title}</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-1 text-xs rounded-full ${
            bugData.status === 'Open' ? 'bg-red-100 text-red-800' :
            bugData.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            bugData.status === 'Fixed' ? 'bg-blue-100 text-blue-800' :
            bugData.status === 'Verified' ? 'bg-purple-100 text-purple-800' :
            'bg-green-100 text-green-800'
          }`}>
            {bugData.status}
          </span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            bugData.severity === 'Critical' ? 'bg-red-100 text-red-800' :
            bugData.severity === 'High' ? 'bg-orange-100 text-orange-800' :
            bugData.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            Severity: {bugData.severity}
          </span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            bugData.priority === 'Highest' ? 'bg-red-100 text-red-800' :
            bugData.priority === 'High' ? 'bg-orange-100 text-orange-800' :
            bugData.priority === 'Medium' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            Priority: {bugData.priority}
          </span>
        </div>
      </div>
      
      <div className="overflow-auto flex-1 p-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">Assignee</p>
            <div className="flex items-center">
              <UserCircle size={18} className="mr-1 text-gray-400" />
              <p className="text-sm font-medium">{bugData.assignee}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Reported By</p>
            <div className="flex items-center">
              <UserCircle size={18} className="mr-1 text-gray-400" />
              <p className="text-sm font-medium">{bugData.reportedBy}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Reported On</p>
            <p className="text-sm font-medium">{bugData.reportedOn}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">Environment</p>
            <p className="text-sm">{bugData.environment}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Version</p>
            <p className="text-sm">{bugData.version}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Last Updated</p>
            <p className="text-sm">{bugData.lastUpdated}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
          <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-800">
            {bugData.description}
          </div>
        </div>
        
        <BugAttachments attachments={bugData.attachments} />
        <BugAIInsights insights={bugData.aiInsights} />
        <BugActions />
        <BugActivity activity={bugData.activity} />
      </div>
      
      <BugComments />
    </div>
  );
};

export default BugDetails;