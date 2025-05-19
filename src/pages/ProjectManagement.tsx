import React, { useState } from 'react';
import KanbanBoard from '../components/project/KanbanBoard';
import ListView from '../components/project/ListView';
import { LayoutList, Kanban as LayoutKanban, Calendar, GanttChart, Plus } from 'lucide-react';

type ViewType = 'kanban' | 'list' | 'timeline' | 'calendar';

const ProjectManagement = () => {
  const [currentView, setCurrentView] = useState<ViewType>('kanban');

  const renderView = () => {
    switch (currentView) {
      case 'kanban':
        return <KanbanBoard />;
      case 'list':
        return <ListView />;
      case 'timeline':
        return <div className="flex items-center justify-center h-[calc(100vh-250px)] bg-white rounded-lg shadow">
          <div className="text-center p-8">
            <GanttChart size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Timeline View</h3>
            <p className="text-gray-600 max-w-md">
              The timeline view is coming soon! This will allow you to visualize your project tasks on a Gantt chart.
            </p>
          </div>
        </div>;
      case 'calendar':
        return <div className="flex items-center justify-center h-[calc(100vh-250px)] bg-white rounded-lg shadow">
          <div className="text-center p-8">
            <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Calendar View</h3>
            <p className="text-gray-600 max-w-md">
              The calendar view is coming soon! This will allow you to see your project tasks on a calendar.
            </p>
          </div>
        </div>;
      default:
        return <KanbanBoard />;
    }
  };

  return (
    <div className="h-full animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Project Management</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>New Task</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center w-full md:w-auto">
          <div className="flex bg-gray-100 rounded-md p-1 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setCurrentView('kanban')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap ${
                currentView === 'kanban'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <LayoutKanban size={16} />
              <span>Kanban</span>
            </button>
            <button
              onClick={() => setCurrentView('list')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap ${
                currentView === 'list'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <LayoutList size={16} />
              <span>List</span>
            </button>
            <button
              onClick={() => setCurrentView('timeline')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap ${
                currentView === 'timeline'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <GanttChart size={16} />
              <span>Timeline</span>
            </button>
            <button
              onClick={() => setCurrentView('calendar')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap ${
                currentView === 'calendar'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Calendar size={16} />
              <span>Calendar</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="w-full md:w-auto px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Sprints</option>
            <option value="current">Current Sprint</option>
            <option value="backlog">Backlog</option>
            <option value="completed">Completed</option>
          </select>
          <select className="w-full md:w-auto px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Assignees</option>
            <option value="me">Assigned to Me</option>
            <option value="unassigned">Unassigned</option>
          </select>
        </div>
      </div>
      
      {renderView()}
    </div>
  );
};

export default ProjectManagement;