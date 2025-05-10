import React, { useState } from 'react';
import { ChevronDown, Plus, UserCircle, Tag, Calendar, MessageSquare, Clock } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee: string | null;
  dueDate: string | null;
  comments: number;
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const initialColumns: Column[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: 'bg-gray-500',
    tasks: [
      {
        id: 'task-1',
        title: 'Create test cases for payment module',
        description: 'Write comprehensive test cases for the new payment gateway integration',
        priority: 'High',
        assignee: 'John Doe',
        dueDate: '2023-10-05',
        comments: 3,
        tags: ['Test Cases', 'Payment']
      },
      {
        id: 'task-2',
        title: 'Review authentication flow tests',
        description: 'Ensure all edge cases are covered in the authentication testing',
        priority: 'Medium',
        assignee: 'Sarah Miller',
        dueDate: '2023-10-10',
        comments: 1,
        tags: ['Review', 'Authentication']
      },
      {
        id: 'task-3',
        title: 'Update regression suite for v2.4',
        description: 'Add new test cases and update existing ones for the v2.4 release',
        priority: 'Medium',
        assignee: null,
        dueDate: '2023-10-15',
        comments: 0,
        tags: ['Regression', 'Update']
      }
    ]
  },
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-blue-500',
    tasks: [
      {
        id: 'task-4',
        title: 'Setup automated tests for mobile app',
        description: 'Configure Appium and create first set of automated tests for the iOS app',
        priority: 'High',
        assignee: 'Mike Johnson',
        dueDate: '2023-10-03',
        comments: 2,
        tags: ['Automation', 'Mobile']
      },
      {
        id: 'task-5',
        title: 'Create test plan for Q4',
        description: 'Plan testing activities and resource allocation for Q4',
        priority: 'Critical',
        assignee: 'Emma Wilson',
        dueDate: '2023-09-30',
        comments: 5,
        tags: ['Planning', 'Documentation']
      }
    ]
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    color: 'bg-yellow-500',
    tasks: [
      {
        id: 'task-6',
        title: 'Execute tests for shopping cart module',
        description: 'Run manual tests for the updated shopping cart functionality',
        priority: 'High',
        assignee: 'Jane Smith',
        dueDate: '2023-09-28',
        comments: 2,
        tags: ['Execution', 'E-commerce']
      },
      {
        id: 'task-7',
        title: 'Investigate failed tests on CI pipeline',
        description: 'Debug and fix inconsistent test failures in the nightly build',
        priority: 'Critical',
        assignee: 'David Kumar',
        dueDate: '2023-09-27',
        comments: 7,
        tags: ['CI/CD', 'Debug']
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-green-500',
    tasks: [
      {
        id: 'task-8',
        title: 'Update test environments with latest build',
        description: 'Deploy v2.3.5 to QA environments and verify configuration',
        priority: 'Medium',
        assignee: 'Mike Johnson',
        dueDate: '2023-09-25',
        comments: 1,
        tags: ['Environment', 'DevOps']
      },
      {
        id: 'task-9',
        title: 'Create bug reports for critical issues',
        description: 'Document and report all P1 bugs found during the sprint',
        priority: 'High',
        assignee: 'Sarah Miller',
        dueDate: '2023-09-22',
        comments: 4,
        tags: ['Bugs', 'Documentation']
      },
      {
        id: 'task-10',
        title: 'Review test results from automation run',
        description: 'Analyze results from the weekend automation batch and identify patterns',
        priority: 'Low',
        assignee: 'John Doe',
        dueDate: '2023-09-20',
        comments: 2,
        tags: ['Automation', 'Review']
      }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Critical': return 'bg-red-100 text-red-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Medium': return 'bg-blue-100 text-blue-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  return (
    <div className="h-[calc(100vh-250px)] flex gap-5 overflow-x-auto pb-4 pr-4">
      {columns.map((column) => (
        <div 
          key={column.id} 
          className="bg-gray-100 rounded-lg shadow-sm min-w-[320px] w-[320px] flex flex-col h-full"
        >
          <div className="p-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${column.color} mr-2`}></div>
              <h3 className="font-medium text-gray-800">{column.title}</h3>
              <div className="ml-2 bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {column.tasks.length}
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">
                <ChevronDown size={16} />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded ml-1">
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-3">
              {column.tasks.map((task) => (
                <div 
                  key={task.id}
                  className="bg-white p-3 rounded-md shadow-sm border border-gray-200 cursor-grab hover:shadow-md transition-shadow scale-in"
                >
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">{task.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
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
                  
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      {task.assignee ? (
                        <div className="flex items-center">
                          <UserCircle size={16} className="mr-1" />
                          <span>{task.assignee}</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <UserCircle size={16} className="mr-1" />
                          <span>Unassigned</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {task.dueDate && (
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          <span>{task.dueDate}</span>
                        </div>
                      )}
                      {task.comments > 0 && (
                        <div className="flex items-center">
                          <MessageSquare size={12} className="mr-1" />
                          <span>{task.comments}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-2 border-t border-gray-200">
            <button className="w-full py-2 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-200 rounded-md transition-colors">
              <Plus size={16} className="mr-1" />
              Add Task
            </button>
          </div>
        </div>
      ))}
      
      <div className="min-w-[320px] w-[320px] flex items-start pt-4">
        <button className="w-full py-3 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-200 bg-gray-100 rounded-md transition-colors">
          <Plus size={16} className="mr-1" />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;