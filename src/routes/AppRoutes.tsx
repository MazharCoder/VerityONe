import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import TestCaseManagement from '../pages/TestCaseManagement';
import BugTracking from '../pages/BugTracking';
import ProjectManagement from '../pages/ProjectManagement';
import AIInsights from '../pages/AIInsights';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { SignedIn } from '@clerk/clerk-react';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
        <SignedIn>

          <Dashboard />
        </SignedIn>
        
        } />
      <Route path="/test-cases" element={<TestCaseManagement />} />
      <Route path="/bugs" element={<BugTracking />} />
      <Route path="/projects" element={<ProjectManagement />} />
      <Route path="/ai-insights" element={<AIInsights />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;