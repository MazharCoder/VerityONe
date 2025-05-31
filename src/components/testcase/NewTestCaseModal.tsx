import React, { useState } from 'react';
import { X, Plus, Save } from 'lucide-react';

interface NewTestCaseModalProps {
  onClose: () => void;
}

const NewTestCaseModal: React.FC<NewTestCaseModalProps> = ({ onClose }) => {
  const [testCase, setTestCase] = useState({
    title: '',
    description: '',
    status: 'Draft',
    priority: 'Medium',
    steps: [{ id: 1, description: '', expectedResult: '' }]
  });

  const addStep = () => {
    setTestCase(prev => ({
      ...prev,
      steps: [...prev.steps, { 
        id: prev.steps.length + 1, 
        description: '', 
        expectedResult: '' 
      }]
    }));
  };

  const removeStep = (id: number) => {
    setTestCase(prev => ({
      ...prev,
      steps: prev.steps.filter(step => step.id !== id)
    }));
  };

  const updateStep = (id: number, field: string, value: string) => {
    setTestCase(prev => ({
      ...prev,
      steps: prev.steps.map(step =>
        step.id === id ? { ...step, [field]: value } : step
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to save the test case
    console.log('Test case:', testCase);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl h-3/4 max-h-[800px] flex flex-col animate-[scaleIn_0.3s_ease-in-out]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">Create New Test Case</h3>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <X size={18} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Case Title
              </label>
              <input
                type="text"
                value={testCase.title}
                onChange={(e) => setTestCase({...testCase, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter test case title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={testCase.description}
                onChange={(e) => setTestCase({...testCase, description: e.target.value})}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter test case description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                  <option value="In Review">In Review</option>
                  <option value="Approved">Approved</option>
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
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Test Steps
                </label>
                <button
                  type="button"
                  onClick={addStep}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Plus size={14} className="mr-1" />
                  Add Step
                </button>
              </div>
              
              <div className="space-y-4">
                {testCase.steps.map((step, index) => (
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
                      {testCase.steps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStep(step.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
        
        <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <Save size={16} className="mr-2" />
            Save Test Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTestCaseModal;