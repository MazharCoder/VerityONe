import React from 'react';
import { ClipboardCheck, CheckCircle, XCircle, Bug, Clock, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SummaryWidgets = () => {
  const navigate = useNavigate();

  const widgets = [
    {
      title: 'Total Test Cases',
      value: 234,
      icon: <ClipboardCheck size={20} />,
      color: 'bg-blue-500',
      change: '+12% from last week',
      positive: true,
      path: '/test-cases'
    },
    {
      title: 'Passed Tests',
      value: 187,
      icon: <CheckCircle size={20} />,
      color: 'bg-green-500',
      change: '+8% from last week',
      positive: true,
      path: '/test-cases'
    },
    {
      title: 'Failed Tests',
      value: 47,
      icon: <XCircle size={20} />,
      color: 'bg-red-500',
      change: '+3% from last week',
      positive: false,
      path: '/test-cases'
    },
    {
      title: 'Open Bugs',
      value: 28,
      icon: <Bug size={20} />,
      color: 'bg-orange-500',
      change: '-5% from last week',
      positive: true,
      path: '/bugs'
    },
    {
      title: 'Tasks In Progress',
      value: 16,
      icon: <Clock size={20} />,
      color: 'bg-yellow-500',
      change: 'No change',
      positive: null,
      path: '/projects'
    },
    {
      title: 'AI Generated Tests',
      value: 54,
      icon: <Brain size={20} />,
      color: 'bg-purple-500',
      change: '+24% from last week',
      positive: true,
      path: '/ai-insights'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {widgets.map((widget, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow scale-in cursor-pointer"
          onClick={() => navigate(widget.path)}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{widget.title}</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">{widget.value}</h3>
              <p className={`text-xs mt-1 ${
                widget.positive === null ? 'text-gray-500' : 
                widget.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {widget.change}
              </p>
            </div>
            <div className={`${widget.color} p-2 rounded-md text-white`}>
              {widget.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryWidgets;