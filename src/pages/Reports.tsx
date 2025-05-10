import React from 'react';
import { BarChart, ChevronDown, Download, LineChart, PieChart, RefreshCw } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6 animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <div className="flex gap-3">
          <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all_time">All Time</option>
            <option value="this_year">This Year</option>
            <option value="this_quarter">This Quarter</option>
            <option value="this_month">This Month</option>
            <option value="this_week">This Week</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Test Cases</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">1,234</h3>
              <p className="text-xs mt-1 text-green-600">
                +12% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pass Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">87.3%</h3>
              <p className="text-xs mt-1 text-green-600">
                +2.5% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Bug Fix Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">92.1%</h3>
              <p className="text-xs mt-1 text-green-600">
                +5.3% from last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Resolution Time</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">2.3 days</h3>
              <p className="text-xs mt-1 text-green-600">
                -0.5 days from last month
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-lg shadow border border-gray-100">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Test Execution Trends</h2>
              <div className="flex items-center gap-2">
                <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
                  Metrics <ChevronDown size={14} className="ml-1" />
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-800">
                  <Download size={14} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="h-80 flex items-center justify-center">
                <LineChart size={320} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-lg shadow border border-gray-100 h-full">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Test Case Distribution</h2>
              <button className="text-sm text-gray-600 hover:text-gray-800">
                <Download size={14} />
              </button>
            </div>
            <div className="p-4 flex flex-col items-center justify-center h-80">
              <PieChart size={220} className="text-gray-300 mb-6" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Functional (45%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Unit (25%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Integration (15%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">UI/UX (10%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Performance (5%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white rounded-lg shadow border border-gray-100">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Bug Severity Distribution</h2>
              <button className="text-sm text-gray-600 hover:text-gray-800">
                <Download size={14} />
              </button>
            </div>
            <div className="p-4">
              <div className="h-64 flex items-center justify-center">
                <BarChart size={260} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white rounded-lg shadow border border-gray-100">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Top Bug Categories</h2>
              <button className="text-sm text-gray-600 hover:text-gray-800">
                <Download size={14} />
              </button>
            </div>
            <div className="p-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Count
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      % of Total
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      UI/UX Issues
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      42
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      32%
                    </td>
                    <td className="px-4 py-3 text-sm text-red-600">
                      +12%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      Data Validation
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      28
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      21%
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600">
                      -5%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      Authentication
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      21
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      16%
                    </td>
                    <td className="px-4 py-3 text-sm text-red-600">
                      +3%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      API Integration
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      18
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      14%
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600">
                      -8%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      Performance
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      12
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      9%
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600">
                      -2%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;