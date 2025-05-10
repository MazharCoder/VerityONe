import React from 'react';
import { Search, Bell, HelpCircle, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search test cases, bugs, or tasks..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle size={20} />
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
          <UserCircle size={28} className="text-gray-600" />
          <span className="font-medium text-sm text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;