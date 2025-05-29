import  { useState } from 'react';
import TestSuiteTree from '../components/testcase/TestSuiteTree';
import TestCaseList from '../components/testcase/TestCaseList';
import TestCaseEditor from '../components/testcase/TestCaseEditor';
import AITestGenerator from '../components/testcase/AITestGenerator';
import { Plus, Brain } from 'lucide-react';

const TestCaseManagement = () => {
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState<number | null>(null);

  return (
    <div className="h-full animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex justify-between [@media(max-width:624px)]:flex-col  [@media(max-width:624px)]:gap-2  items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Test Case Management
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAIGenerator(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <Brain size={16} />
            <span>AI Generate</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>New Test Case</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 ">
        <div className=" md:col-span-3  col-span-12   rounded-lg shadow overflow-hidden border border-gray-200">
          <TestSuiteTree />
        </div>
        
        <div className="col-span-12 md:col-span-9  grid grid-rows-1 gap-6">
          {selectedTestCase ? (
            <TestCaseEditor 
              testCaseId={selectedTestCase} 
              onClose={() => setSelectedTestCase(null)}
            />
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
              <TestCaseList onSelectTestCase={setSelectedTestCase} />
            </div>
          )}
        </div>
      </div>
    
      {showAIGenerator && (
        <AITestGenerator onClose={() => setShowAIGenerator(false)} />
      )}
    </div>
  );
};

export default TestCaseManagement;
