import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Missing edge case tests',
    description: 'Add form validation tests for the new signup flow',
    priority: 'High',
    aiConfidence: '94%'
  },
  {
    id: 2,
    title: 'Potential regression bug',
    description: 'Similar bug patterns detected in payment module',
    priority: 'Medium',
    aiConfidence: '87%'
  },
  {
    id: 3,
    title: 'Test coverage gap',
    description: 'Mobile view testing needed for product page',
    priority: 'Medium',
    aiConfidence: '82%'
  },
  {
    id: 4,
    title: 'Sprint optimization',
    description: 'Prioritize API tests before UI tests for efficiency',
    priority: 'Low',
    aiConfidence: '78%'
  }
];

const AIRecommendations = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 h-full">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Lightbulb size={18} className="text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-800">AI Recommendations</h2>
        </div>
      </div>
      <div className="px-4 py-2">
        {recommendations.map((item) => (
          <div 
            key={item.id}
            className="py-3 px-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-md cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item.priority === 'High' ? 'bg-red-100 text-red-800' :
                item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {item.priority}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">AI Confidence: {item.aiConfidence}</span>
              <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Take action <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;