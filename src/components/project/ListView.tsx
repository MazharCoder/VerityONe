import React, { useState } from 'react';
import { ArrowUpDown, ChevronDown, Search, SlidersHorizontal, UserCircle, Tag, Calendar, Check, Clock } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Backlog' | 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee: string | null;
  dueDate: string | null;
  tags: string[];
}

const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Create test cases for payment module',
    description: 'Write comprehensive test cases for the new payment gateway integration',
    status: 'Backlog',
    priority: 'High',
    assignee: 'John Doe',
    dueDate: '2023-10-05',
    tags: ['Test Cases', 'Payment']
  },
  {
    id: 'task-2',
    title: 'Review authentication flow tests',
    description: 'Ensure all edge cases are covered in the authentication testing',
    status: 'Backlog',
    priority: 'Medium',
    assignee: 'Sarah Miller',
    dueDate: '2023-10-10',
    tags: ['Review', 'Authentication']
  },
  {
    id: 'task-3',
    title: 'Update regression suite for v2.4',
    description: 'Add new test cases and update existing ones for the v2.4 release',
    status: 'Backlog',
    priority: 'Medium',
    assignee: null,
    dueDate: '2023-10-15',
    tags: ['Regression', 'Update']
  },
  {
    id: 'task-4',
    title: 'Setup automated tests for mobile app',
    description: 'Configure Appium and create first set of automated tests for the iOS app',
    status: 'To Do',
    priority: 'High',
    assignee: 'Mike Johnson',
    dueDate: '2023-10-03',
    tags: ['Automation', 'Mobile']
  },
  {
    id: 'task-5',
    title: 'Create test plan for Q4',
    description: 'Plan testing activities and resource allocation for Q4',
    status: 'To Do',
    priority: 'Critical',
    assignee: 'Emma Wilson',
    dueDate: '2023-09-30',
    tags: ['Planning', 'Documentation']
  },
  {
    id: 'task-6',
    title: 'Execute tests for shopping cart module',
    description: 'Run manual tests for the updated shopping cart functionality',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Jane Smith',
    dueDate: '2023-09-28',
    tags: ['Execution', 'E-commerce']
  },
  {
    id: 'task-7',
    title: 'Investigate failed tests on CI pipeline',
    description: 'Debug and fix inconsistent test failures in the nightly build',
    status: 'In Progress',
    priority: 'Critical',
    assignee: 'David Kumar',
    dueDate: '2023-09-27',
    tags: ['CI/CD', 'Debug']
  },
  {
    id: 'task-8',
    title: 'Update test environments with latest build',
    description: 'Deploy v2.3.5 to QA environments and verify configuration',
    status: 'Done',
    priority: 'Medium',
    assignee: 'Mike Johnson',
    dueDate: '2023-09-25',
    tags: ['Environment', 'DevOps']
  },
  {
    id: 'task-9',
    title: 'Create bug reports for critical issues',
    description: 'Document and report all P1 bugs found during the sprint',
    status: 'Done',
    priority: 'High',
    assignee: 'Sarah Miller',
    dueDate: '2023-09-22',
    tags: ['Bugs', 'Documentation']
  },
  {
    id: 'task-10',
    title: 'Review test results from automation run',
    description: 'Analyze results from the weekend automation batch and identify patterns',
    status: 'Done',
    priority: 'Low',
    assignee: 'John Doe',
    dueDate: '2023-09-20',
    tags: ['Automation', 'Review']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Backlog': return 'bg-gray-100 text-gray-800';
    case 'To Do': return 'bg-blue-100 text-blue-800';
    case 'In Progress': return 'bg-yellow-100 text-yellow-800';
    case 'Done': return 'bg-green-100 text-green-800';
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

const ListView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Task List</h3>
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
            placeholder="Search tasks..."
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
                  <option value="Backlog">Backlog</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
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
                <label className="text-xs text-gray-600 font-medium">Assignee</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Assignees</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Sarah Miller">Sarah Miller</option>
                  <option value="Mike Johnson">Mike Johnson</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Emma Wilson">Emma Wilson</option>
                  <option value="David Kumar">David Kumar</option>
                  <option value="Unassigned">Unassigned</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Due Date</label>
                <select className="mt-1 w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">All Dates</option>
                  <option value="today">Today</option>
                  <option value="this_week">This Week</option>
                  <option value="next_week">Next Week</option>
                  <option value="overdue">Overdue</option>
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

      <div className="overflow-auto max-h-[calc(100vh-350px)]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th scope="col" className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Task <ArrowUpDown size={12} className="ml-1" />
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
                  Assignee <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Due Date <ArrowUpDown size={12} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTasks.map((task) => (
              <tr 
                key={task.id} 
                className="hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{task.title}</div>
                    <div className="text-sm text-gray-500 line-clamp-1">{task.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <UserCircle size={20} className="mr-2 text-gray-400" />
                    <span className="text-sm text-gray-900">
                      {task.assignee || 'Unassigned'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.dueDate ? (
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar size={14} className="mr-1 text-gray-500" />
                      {task.dueDate}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500">No date</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {task.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing {filteredTasks.length} of {tasks.length} tasks
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-50 border border-blue-300 rounded-md text-blue-700 text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListView;