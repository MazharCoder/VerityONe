import React, { useState } from 'react';
import { X, Check, Trash2, Plus, FileDown, AlertTriangle } from 'lucide-react';

interface TestCaseEditorProps {
  testCaseId: number;
  onClose: () => void;
}

interface TestStep {
  id: number;
  description: string;
  expectedResult: string;
}

// Mock test case data
const testCaseData = {
  id: 1,
  title: 'Verify user can login with valid credentials',
  description: 'This test case verifies that users can successfully login to the application using valid credentials.',
  status: 'Passed',
  priority: 'High',
  createdBy: 'John Doe',
  lastUpdated: '2 days ago',
  steps: [
    { 
      id: 1, 
      description: 'Navigate to the login page', 
      expectedResult: 'Login page is displayed with username and password fields' 
    },
    { 
      id: 2, 
      description: 'Enter valid username and password', 
      expectedResult: 'Username and password fields accept input' 
    },
    { 
      id: 3, 
      description: 'Click on the Login button', 
      expectedResult: 'User is successfully logged in and redirected to the dashboard' 
    }
  ]
};

const TestCaseEditor: React.FC<TestCaseEditorProps> = ({ testCaseId, onClose }) => {
  const [testCase, setTestCase] = useState(testCaseData);
  const [steps, setSteps] = useState<TestStep[]>(testCaseData.steps);

  const addStep = () => {
    const newStep = {
      id: steps.length + 1,
      description: '',
      expectedResult: ''
    };
    setSteps([...steps, newStep]);
  };

  const removeStep = (id: number) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const updateStep = (id: number, field: keyof TestStep, value: string) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, [field]: value } : step
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 animate-[scaleIn_0.2s_ease-in-out]">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">Test Case: TC-{testCaseId}</h3>
        <button 
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="p-6 overflow-auto h-[calc(100vh-260px)]">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Test Case Title
          </label>
          <input
            type="text"
            value={testCase.title}
            onChange={(e) => setTestCase({...testCase, title: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={testCase.description}
            onChange={(e) => setTestCase({...testCase, description: e.target.value})}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select 
              value={testCase.status}
              onChange={(e) => setTestCase({...testCase, status: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Draft">Draft</option>
              <option value="Ready">Ready</option>
              <option value="Passed">Passed</option>
              <option value="Failed">Failed</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={testCase.priority}
              onChange={(e) => setTestCase({...testCase, priority: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-gray-800">Test Steps</h4>
            <div className="flex gap-3">
              <button
                onClick={() => {}}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <FileDown size={14} className="mr-1" />
                Import
              </button>
              <button
                onClick={() => {}}
                className="flex items-center text-sm text-purple-600 hover:text-purple-800"
              >
                <AlertTriangle size={14} className="mr-1" />
                Generate Edge Cases
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="grid grid-cols-12 gap-4 border border-gray-200 p-3 rounded-md">
                <div className="col-span-1 flex items-center justify-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                </div>
                <div className="col-span-5">
                  <label className="block text-xs text-gray-500 mb-1">
                    Step Description
                  </label>
                  <textarea
                    value={step.description}
                    onChange={(e) => updateStep(step.id, 'description', e.target.value)}
                    rows={2}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-5">
                  <label className="block text-xs text-gray-500 mb-1">
                    Expected Result
                  </label>
                  <textarea
                    value={step.expectedResult}
                    onChange={(e) => updateStep(step.id, 'expectedResult', e.target.value)}
                    rows={2}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <button
                    onClick={() => removeStep(step.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            
            <button
              onClick={addStep}
              className="flex items-center justify-center w-full py-2 border border-dashed border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Plus size={16} className="mr-1" />
              Add Step
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <Check size={16} className="mr-1" />
          Save Test Case
        </button>
      </div>
    </div>
  );
};

export default TestCaseEditor;