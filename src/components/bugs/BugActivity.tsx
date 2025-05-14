import React from 'react';
import { ChevronDown, UserCircle } from 'lucide-react';

interface ActivityItem {
  id: number;
  user: string;
  action: string;
  time: string;
  comment?: string;
}

interface BugActivityProps {
  activity: ActivityItem[];
}

const BugActivity: React.FC<BugActivityProps> = ({ activity }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium text-gray-700">Activity & Comments</h4>
        <button className="text-xs text-gray-500 flex items-center">
          Show all <ChevronDown size={12} className="ml-1" />
        </button>
      </div>
      
      <div className="space-y-4">
        {activity.map((item) => (
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
  );
};

export default BugActivity;