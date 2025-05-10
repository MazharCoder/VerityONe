import React from 'react';
import { Brain, FileWarning, LineChart as ChartLineUp, RefreshCw, Lightbulb, BarChart, DownloadCloud, ArrowUpRight } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="animate-[fadeIn_0.3s_ease-in-out]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">AI Insights</h1>
          <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            Powered by VerityONE AI
          </span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            <DownloadCloud size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow scale-in">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Test Coverage</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">78%</h3>
              <p className="text-xs mt-1 text-yellow-600">
                12% below target (90%)
              </p>
            </div>
            <div className="bg-blue-600 p-2 rounded-md text-white">
              <ChartLineUp size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow scale-in">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">High-Risk Areas</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">3</h3>
              <p className="text-xs mt-1 text-red-600">
                +1 from last analysis
              </p>
            </div>
            <div className="bg-red-600 p-2 rounded-md text-white">
              <FileWarning size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition-shadow scale-in">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">AI-Generated Tests</p>
              <h3 className="text-2xl font-bold mt-1 text-gray-800">54</h3>
              <p className="text-xs mt-1 text-green-600">
                +24% from last month
              </p>
            </div>
            <div className="bg-purple-600 p-2 rounded-md text-white">
              <Brain size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-lg shadow border border-gray-100">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Coverage Trends & Gaps</h2>
              <div className="flex items-center gap-2">
                <select className="text-sm p-1 border border-gray-300 rounded">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>
            <div className="p-4">
              <div className="h-64 flex items-center justify-center">
                <BarChart size={240} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-lg shadow border border-gray-100 h-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Lightbulb size={18} className="text-purple-600" />
                <h2 className="font-medium text-gray-800">Test Case Recommendations</h2>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-gray-800 mb-1">Payment Gateway</h3>
                <p className="text-sm text-gray-600 mb-2">Missing negative test cases for declined transactions</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Generate test cases <ArrowUpRight size={12} className="ml-1" />
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-gray-800 mb-1">Mobile Responsive UI</h3>
                <p className="text-sm text-gray-600 mb-2">Only 45% coverage on tablet viewport sizes</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Generate test cases <ArrowUpRight size={12} className="ml-1" />
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-gray-800 mb-1">User Authentication</h3>
                <p className="text-sm text-gray-600 mb-2">Missing security tests for brute force attempts</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Generate test cases <ArrowUpRight size={12} className="ml-1" />
                </button>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-1">API Rate Limiting</h3>
                <p className="text-sm text-gray-600 mb-2">No load testing coverage for new endpoints</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Generate test cases <ArrowUpRight size={12} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-100">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-medium text-gray-800">High-Risk Areas</h2>
          </div>
          <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Module
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Detection Confidence
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Payment Processing
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      Critical
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    94%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    User Authentication
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                      High
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    87%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    Data Export API
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                      High
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    82%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border border-gray-100">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-medium text-gray-800">Sprint Optimization</h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Resource Allocation</h3>
              <p className="text-sm text-gray-600 mb-2">AI suggests allocating 30% more time to API testing based on defect patterns</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Test Prioritization</h3>
              <p className="text-sm text-gray-600 mb-2">Focus on payment and authentication modules first (highest risk areas)</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  Payment
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                  Authentication
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  API
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Automation ROI</h3>
              <p className="text-sm text-gray-600 mb-2">Predicted 3.2x return on automation investment for cart and checkout flows</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 font-medium text-sm">+320%</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;