import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface Bug {
  id: number;
  title: string;
  status: 'Open' | 'In Progress' | 'Fixed' | 'Verified' | 'Closed';
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
  assignee: string;
  reportedBy: string;
  lastUpdated: string;
}

const bugData: Bug[] = [
  {
    id: 1,
    title: 'Login not working with special characters in password',
    status: 'Open',
    severity: 'High',
    priority: 'High',
    assignee: 'Mike Johnson',
    reportedBy: 'Sarah Miller',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    title: 'Product page crashes on mobile when images are loading',
    status: 'In Progress',
    severity: 'Critical',
    priority: 'Highest',
    assignee: 'John Doe',
    reportedBy: 'Emma Wilson',
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    title: 'Total price not updated when item quantity changes',
    status: 'Fixed',
    severity: 'Medium',
    priority: 'Medium',
    assignee: 'Jane Smith',
    reportedBy: 'Alex Johnson',
    lastUpdated: '2 days ago'
  },
  {
    id: 4,
    title: 'Checkout form validation error message not visible',
    status: 'Verified',
    severity: 'Medium',
    priority: 'High',
    assignee: 'Sarah Miller',
    reportedBy: 'Mike Chen',
    lastUpdated: '3 days ago'
  },
  {
    id: 5,
    title: 'Search results not showing correct products',
    status: 'Open',
    severity: 'High',
    priority: 'High',
    assignee: 'Unassigned',
    reportedBy: 'David Kumar',
    lastUpdated: '5 hours ago'
  },
  {
    id: 6,
    title: 'Password reset email not being sent',
    status: 'In Progress',
    severity: 'Critical',
    priority: 'Highest',
    assignee: 'Emma Wilson',
    reportedBy: 'John Doe',
    lastUpdated: '1 day ago'
  },
  {
    id: 7,
    title: 'Error message when clicking Back button during checkout',
    status: 'Open',
    severity: 'Low',
    priority: 'Low',
    assignee: 'Unassigned',
    reportedBy: 'Sarah Miller',
    lastUpdated: '4 days ago'
  },
  {
    id: 8,
    title: 'Account settings page blank on Firefox',
    status: 'Closed',
    severity: 'Medium',
    priority: 'Medium',
    assignee: 'Mike Johnson',
    reportedBy: 'Jane Smith',
    lastUpdated: '1 week ago'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open': return 'bg-red-100 text-red-800';
    case 'In Progress': return 'bg-yellow-100 text-yellow-800';
    case 'Fixed': return 'bg-blue-100 text-blue-800';
    case 'Verified': return 'bg-purple-100 text-purple-800';
    case 'Closed': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical': return 'bg-red-100 text-red-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

interface BugListProps {
  onSelectBug: (id: number) => void;
}

const BugList: React.FC<BugListProps> = ({ onSelectBug }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBugs = bugData.filter(bug => 
    bug.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Bug Reports</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search bug reports..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
        </div>

        {showFilters && (
          <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-200 animate-[scaleIn_0.2s_ease-in-out]">
            <div className="grid grid-cols-4 gap-3">
              <div>
                <label className="text-xs text-gray-600 font-medium">Status</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Statuses</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Verified">Verified</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Severity</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Severities</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Assignee</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Assignees</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Mike Johnson">Mike Johnson</option>
                  <option value="Sarah Miller">Sarah Miller</option>
                  <option value="Emma Wilson">Emma Wilson</option>
                  <option value="Unassigned">Unassigned</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Date Range</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Dates</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last_7_days">Last 7 Days</option>
                  <option value="last_30_days">Last 30 Days</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <button className="px-3 py-1.5 text-xs bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-2">
                Reset
              </button>
              <button className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  ID <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Title <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Status <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Severity <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Assignee <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBugs.map((bug) => (
              <tr 
                key={bug.id} 
                onClick={() => onSelectBug(bug.id)}
                className="hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  BUG-{bug.id}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {bug.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(bug.status)}`}>
                    {bug.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(bug.severity)}`}>
                    {bug.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bug.assignee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BugList;