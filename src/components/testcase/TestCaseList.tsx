import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface TestCase {
  id: number;
  title: string;
  status: 'Draft' | 'Ready' | 'Passed' | 'Failed' | 'Blocked';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  createdBy: string;
  lastUpdated: string;
}

const testCases: TestCase[] = [
  { 
    id: 1, 
    title: 'Verify user can login with valid credentials', 
    status: 'Passed', 
    priority: 'High', 
    createdBy: 'John Doe', 
    lastUpdated: '2 days ago' 
  },
  { 
    id: 2, 
    title: 'Check password reset functionality', 
    status: 'Draft', 
    priority: 'Medium', 
    createdBy: 'Jane Smith', 
    lastUpdated: '1 day ago' 
  },
  { 
    id: 3, 
    title: 'Verify form validation on registration page', 
    status: 'Failed', 
    priority: 'High', 
    createdBy: 'Mike Johnson', 
    lastUpdated: '3 hours ago' 
  },
  { 
    id: 4, 
    title: 'Test checkout process with multiple items', 
    status: 'Ready', 
    priority: 'Critical', 
    createdBy: 'Sarah Wilson', 
    lastUpdated: '2 days ago' 
  },
  { 
    id: 5, 
    title: 'Verify order confirmation email is sent', 
    status: 'Passed', 
    priority: 'Medium', 
    createdBy: 'John Doe', 
    lastUpdated: '5 days ago' 
  },
  { 
    id: 6, 
    title: 'Test product search functionality', 
    status: 'Ready', 
    priority: 'Medium', 
    createdBy: 'Jane Smith', 
    lastUpdated: '1 week ago' 
  },
  { 
    id: 7, 
    title: 'Verify payment gateway integration', 
    status: 'Failed', 
    priority: 'Critical', 
    createdBy: 'Mike Johnson', 
    lastUpdated: '1 day ago' 
  },
  { 
    id: 8, 
    title: 'Test mobile responsiveness on product page', 
    status: 'Blocked', 
    priority: 'High', 
    createdBy: 'Sarah Wilson', 
    lastUpdated: '3 days ago' 
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Passed': return 'bg-green-100 text-green-800';
    case 'Failed': return 'bg-red-100 text-red-800';
    case 'Draft': return 'bg-gray-100 text-gray-800';
    case 'Ready': return 'bg-blue-100 text-blue-800';
    case 'Blocked': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Critical': return 'bg-red-100 text-red-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Medium': return 'bg-blue-100 text-blue-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

interface TestCaseListProps {
  onSelectTestCase: (id: number) => void;
}

const TestCaseList: React.FC<TestCaseListProps> = ({ onSelectTestCase }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTestCases = testCases.filter(testCase => 
    testCase.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Test Cases</h3>
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
            placeholder="Search test cases..."
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
                  <option value="Draft">Draft</option>
                  <option value="Ready">Ready</option>
                  <option value="Passed">Passed</option>
                  <option value="Failed">Failed</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Priority</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Priorities</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Created By</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Users</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Mike Johnson">Mike Johnson</option>
                  <option value="Sarah Wilson">Sarah Wilson</option>
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
                  Priority <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Created By <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Last Updated <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTestCases.map((testCase) => (
              <tr 
                key={testCase.id} 
                onClick={() => onSelectTestCase(testCase.id)}
                className="hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  TC-{testCase.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {testCase.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(testCase.status)}`}>
                    {testCase.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(testCase.priority)}`}>
                    {testCase.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {testCase.createdBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {testCase.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestCaseList;