import React from 'react';
import { Brain } from 'lucide-react';

interface BugAIInsightsProps {
  insights: string[];
}

const BugAIInsights: React.FC<BugAIInsightsProps> = ({ insights }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-gray-700">AI Insights</h4>
        <span className="text-xs text-purple-600 flex items-center">
          <Brain size={12} className="mr-1" />
          Powered by AI
        </span>
      </div>
      <div className="bg-purple-50 border border-purple-200 rounded-md p-3">
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm flex items-start">
              <span className="h-4 w-4 bg-purple-200 rounded-full flex items-center justify-center text-purple-800 text-xs mr-2 mt-0.5">
                {index + 1}
              </span>
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BugAIInsights;