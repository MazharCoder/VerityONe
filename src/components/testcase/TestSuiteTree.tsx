import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FolderOpen, 
  FileText, 
  Search,
  Plus
} from 'lucide-react';

type TreeItem = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: TreeItem[];
};

const initialTree: TreeItem[] = [
  {
    id: '1',
    name: 'E-commerce Project',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Authentication',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Login Tests', type: 'file' },
          { id: '1-1-2', name: 'Registration Tests', type: 'file' },
          { id: '1-1-3', name: 'Password Reset', type: 'file' },
        ]
      },
      {
        id: '1-2',
        name: 'Shopping Cart',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'Add to Cart', type: 'file' },
          { id: '1-2-2', name: 'Update Quantity', type: 'file' },
          { id: '1-2-3', name: 'Remove Items', type: 'file' },
        ]
      },
    ]
  },
  {
    id: '2',
    name: 'Mobile App',
    type: 'folder',
    children: [
      { id: '2-1', name: 'Onboarding Flow', type: 'file' },
      { id: '2-2', name: 'Settings Page', type: 'file' },
    ]
  },
  {
    id: '3',
    name: 'API Integration',
    type: 'folder',
    children: [
      { id: '3-1', name: 'Payment Gateway', type: 'file' },
      { id: '3-2', name: 'Shipping Calculator', type: 'file' },
    ]
  }
];

const TestSuiteTree = () => {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    '1': true,
    '1-1': true
  });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFolder = (id: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderTreeItems = (items: TreeItem[], level = 0) => {
    return items.map(item => {
      // Basic search filtering
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        if (!item.children?.some(child => 
          child.name.toLowerCase().includes(searchTerm.toLowerCase())
        )) {
          return null;
        }
      }

      if (item.type === 'folder') {
        const isExpanded = expandedFolders[item.id];
        return (
          <div key={item.id}>
            <div 
              className={`flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100 ${level > 0 ? `pl-${level * 4 + 3}` : ''}`}
              onClick={() => toggleFolder(item.id)}
              style={{ paddingLeft: level * 16 + 12 }}
            >
              <span className="mr-1 text-gray-500">
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
              <span className="mr-2 text-blue-600">
                {isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />}
              </span>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </div>
            {isExpanded && item.children && (
              <div>
                {renderTreeItems(item.children, level + 1)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div 
            key={item.id}
            className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100"
            style={{ paddingLeft: level * 16 + 32 }}
          >
            <span className="mr-2 text-gray-500">
              <FileText size={16} />
            </span>
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        );
      }
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Test Suites</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <Plus size={16} />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search test suites..."
            className="w-full pl-8 pr-3 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2 text-gray-400" size={15} />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {renderTreeItems(initialTree)}
      </div>
    </div>
  );
};

export default TestSuiteTree;