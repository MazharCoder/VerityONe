import React from 'react';
import { Link, Github, PenLine, ExternalLink } from 'lucide-react';

const BugActions = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium text-gray-700">Actions & Integrations</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
          <Link size={14} />
          Link Issue
        </button>
        <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
          <Github size={14} />
          Create GitHub Issue
        </button>
        <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
          <PenLine size={14} />
          Edit Bug
        </button>
        <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
          <ExternalLink size={14} />
          Export
        </button>
      </div>
    </div>
  );
};

export default BugActions;