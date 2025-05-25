import React, { useState } from 'react';
import BugList from '../components/bugs/BugList';
import BugDetails from '../components/bugs/BugDetails';
import { Plus, Bug } from 'lucide-react';

const BugTracking = () => {
  const [selectedBugId, setSelectedBugId] = useState<number | null>(null);

  return (
    <div className="h-full animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex [@media(max-width:360px)]:flex-col gap-2 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Bug Tracking</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>New Bug Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 ]">
        <div className="col-span-12 lg:col-span-7 bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <BugList onSelectBug={setSelectedBugId} />
        </div>
        
        <div className="col-span-12 lg:col-span-5">
          {selectedBugId ? (
            <BugDetails 
              bugId={selectedBugId} 
              onClose={() => setSelectedBugId(null)} 
            />
          ) : (
            <div className="bg-white rounded-lg shadow border border-gray-200 p-8 h-full flex flex-col items-center justify-center text-gray-500">
              <Bug size={48} className="mb-4" />
              <p className="text-lg mb-2">No Bug Selected</p>
              <p className="text-sm text-center max-w-md">
                Select a bug from the list to view details or click "New Bug Report" to create a new bug report.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BugTracking;