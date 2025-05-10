import React from 'react';
import { 
  ClipboardCheck, 
  Bug, 
  CheckCircle, 
  XCircle, 
  FolderKanban,
  UserCircle
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'test_case',
    action: 'created',
    title: 'User login validation test case',
    user: 'Alex Johnson',
    time: '2 minutes ago',
    icon: <ClipboardCheck size={16} />,
    iconColor: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'bug',
    action: 'reported',
    title: 'Login form validation error on Safari',
    user: 'Sarah Miller',
    time: '15 minutes ago',
    icon: <Bug size={16} />,
    iconColor: 'bg-red-500'
  },
  {
    id: 3,
    type: 'test_execution',
    action: 'passed',
    title: 'Payment gateway integration test',
    user: 'Mike Chen',
    time: '32 minutes ago',
    icon: <CheckCircle size={16} />,
    iconColor: 'bg-green-500'
  },
  {
    id: 4,
    type: 'test_execution',
    action: 'failed',
    title: 'Mobile responsive layout test',
    user: 'Emma Wilson',
    time: '1 hour ago',
    icon: <XCircle size={16} />,
    iconColor: 'bg-red-500'
  },
  {
    id: 5,
    type: 'task',
    action: 'completed',
    title: 'Update test plan for release 2.4.0',
    user: 'David Kumar',
    time: '3 hours ago',
    icon: <FolderKanban size={16} />,
    iconColor: 'bg-purple-500'
  }
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View all
          </button>
        </div>
      </div>
      <div className="px-6 py-3">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="py-3 flex items-start border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-md"
          >
            <div className={`${activity.iconColor} p-2 rounded-md text-white mr-4 mt-0.5`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{activity.user}</span>
                <span className="text-gray-500">{activity.action}</span>
                <span className="font-medium text-gray-900">{activity.title}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
            </div>
            <div className="text-gray-400">
              <UserCircle size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;