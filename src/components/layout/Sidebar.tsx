import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  Bug, 
  FolderKanban, 
  Lightbulb, 
  BarChart3, 
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navItems = [
    { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { title: 'Test Cases', icon: <ClipboardCheck size={20} />, path: '/test-cases' },
    { title: 'Bug Tracking', icon: <Bug size={20} />, path: '/bugs' },
    { title: 'Projects', icon: <FolderKanban size={20} />, path: '/projects' },
    { title: 'AI Insights', icon: <Lightbulb size={20} />, path: '/ai-insights' },
    { title: 'Reports', icon: <BarChart3 size={20} />, path: '/reports' },
    { title: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside className="h-full shadow-md flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-md mr-2">
            <ClipboardCheck size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-800">VerityOne</h1>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-2">
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;