import React, { useState } from 'react';
import { 
  X, 
  Link, 
  MessageCircle, 
  Image, 
  Paperclip, 
  Send, 
  UserCircle,
  ChevronDown,
  Brain,
  Github,
  ExternalLink,
  PenLine
} from 'lucide-react';

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
  const [newComment, setNewComment] = useState('');

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
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
          <div className="flex flex-wrap gap-2">
            {bugData.attachments.map((attachment, index) => (
              <div 
                key={index}
                className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2"
              >
                <Paperclip size={14} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{attachment.name}</p>
                  <p className="text-xs text-gray-500">{attachment.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700">AI Insights</h4>
            <span className="text-xs text-purple-600 flex items-center">
              <Brain size={12} className="mr-1" />
              Powered by AI
            </span>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-md p-3">
            <ul className="space-y-2">
              {bugData.aiInsights.map((insight, index) => (
                <li key={index} className="text-sm flex items-start">
                  <span className="h-4 w-4 bg-purple-200 rounded-full flex items-center justify-center text-purple-800 text-xs mr-2 mt-0.5">
                    {index + 1}
                  </span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Actions & Integrations</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
              <Link size={14} />
              Link Issue
            </button>
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
              <Github size={14} />
              Create GitHub Issue
            </button>
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
              <PenLine size={14} />
              Edit Bug
            </button>
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
              <ExternalLink size={14} />
              Export
            </button>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Activity & Comments</h4>
            <button className="text-xs text-gray-500 flex items-center">
              Show all <ChevronDown size={12} className="ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            {bugData.activity.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-3">
                    <UserCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <p className="text-sm font-medium text-gray-800 mr-2">{item.user}</p>
                      <p className="text-xs text-gray-500">{item.action}</p>
                    </div>
                    <p className="text-xs text-gray-500">{item.time}</p>
                    
                    {item.comment && (
                      <div className="mt-2 bg-gray-50 rounded-md p-3 text-sm text-gray-800">
                        {item.comment}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-3">
            <UserCircle size={20} />
          </div>
          <div className="flex-1 relative">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
            <div className="absolute right-2 bottom-2 flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Image size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip size={16} />
              </button>
              <button className="p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugDetails;