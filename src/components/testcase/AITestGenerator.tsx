import React, { useState } from 'react';
import { X, Brain, RefreshCw, Check, Save, AlertTriangle } from 'lucide-react';

interface AITestGeneratorProps {
  onClose: () => void;
}

const AITestGenerator: React.FC<AITestGeneratorProps> = ({ onClose }) => {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTests, setGeneratedTests] = useState<any[]>([]);

  const generateTests = () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI test generation
    setTimeout(() => {
      // Mock generated test cases
      const mockTests = [
        {
          title: 'Verify user login with valid credentials',
          steps: [
            { description: 'Navigate to login page', expectedResult: 'Login page is displayed' },
            { description: 'Enter valid username "user@example.com"', expectedResult: 'Username is entered correctly' },
            { description: 'Enter valid password "Password123!"', expectedResult: 'Password is entered correctly' },
            { description: 'Click on Login button', expectedResult: 'User is logged in successfully and redirected to dashboard' }
          ]
        },
        {
          title: 'Verify user cannot login with invalid credentials',
          steps: [
            { description: 'Navigate to login page', expectedResult: 'Login page is displayed' },
            { description: 'Enter invalid username "invalid@example.com"', expectedResult: 'Username is entered correctly' },
            { description: 'Enter invalid password "InvalidPass123!"', expectedResult: 'Password is entered correctly' },
            { description: 'Click on Login button', expectedResult: 'Error message is displayed indicating invalid credentials' }
          ]
        },
        {
          title: 'Verify validation for empty login form submission',
          steps: [
            { description: 'Navigate to login page', expectedResult: 'Login page is displayed' },
            { description: 'Leave username and password fields empty', expectedResult: 'Fields are empty' },
            { description: 'Click on Login button', expectedResult: 'Validation message appears for required fields' }
          ]
        }
      ];
      
      setGeneratedTests(mockTests);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl h-3/4 max-h-[800px] flex flex-col animate-[scaleIn_0.3s_ease-in-out]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-800 flex items-center">
            <Brain size={20} className="mr-2 text-purple-600" />
            AI Test Case Generator
          </h3>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6 p-6 overflow-auto flex-1">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Input Requirements</h4>
            <p className="text-sm text-gray-500">
              Enter user story, requirements, or feature description to generate test cases automatically.
            </p>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Example: As a user, I want to be able to reset my password so that I can recover my account if I forget my password."
              rows={8}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setInputText('')}
                className="px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={generateTests}
                disabled={!inputText.trim() || isGenerating}
                className={`px-4 py-2 text-sm rounded-md flex items-center ${
                  !inputText.trim() || isGenerating
                    ? 'bg-purple-300 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw size={16} className="mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain size={16} className="mr-2" />
                    Generate Test Cases
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Generated Test Cases</h4>
            
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <RefreshCw size={32} className="animate-spin mb-3" />
                <p>Generating test cases...</p>
              </div>
            ) : generatedTests.length > 0 ? (
              <div className="space-y-4">
                {generatedTests.map((test, index) => (
                  <div key={index} className="border border-gray-200 rounded-md p-3 hover:border-purple-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-gray-800">{test.title}</h5>
                      <div className="flex gap-1">
                        <button className="p-1 text-gray-400 hover:text-purple-600">
                          <RefreshCw size={14} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-600">
                          <Check size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      {test.steps.map((step: any, stepIndex: number) => (
                        <div key={stepIndex} className="grid grid-cols-12 gap-2">
                          <div className="col-span-1 flex items-center justify-center">
                            <span className="w-5 h-5 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-xs font-medium">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <div className="col-span-5 text-gray-700">{step.description}</div>
                          <div className="col-span-6 text-gray-600 italic">{step.expectedResult}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="mt-3 text-sm text-gray-600 flex items-center">
                  <AlertTriangle size={14} className="mr-1 text-yellow-500" />
                  AI-generated test cases should be reviewed for accuracy.
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500 border border-dashed border-gray-300 rounded-md">
                <Brain size={32} className="mb-3 text-gray-400" />
                <p className="text-center">Enter requirements and click<br />Generate Test Cases to start</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={generatedTests.length === 0}
            className={`px-4 py-2 rounded-md flex items-center ${
              generatedTests.length === 0
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <Save size={16} className="mr-2" />
            Save All Test Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITestGenerator;