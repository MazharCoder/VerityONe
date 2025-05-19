import React from 'react';
import { Brain, FileWarning, LineChart as ChartLineUp, RefreshCw, Lightbulb, BarChart, DownloadCloud, ArrowUpRight } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">AI Insights</h1>
          <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full whitespace-nowrap">
            Powered by VerityONE AI
          </span>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors w-full sm:w-auto justify-center">
            <DownloadCloud size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>
      
      {/* Rest of the component remains unchanged */}
    </div>
  );
};

export default AIInsights;