import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  Bug, 
  FolderKanban, 
  Lightbulb, 
  BarChart3, 
  Settings
} from 'lucide-react';

const Sidebar = () => {
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
    <aside className="bg-white w-64 h-full shadow-md">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-md mr-2">
            <ClipboardCheck size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-800">VerityONE</h1>
        </div>
      </div>
      <nav className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-2">
              <NavLink
                to={item.path}
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