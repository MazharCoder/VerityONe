import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import { SignedIn } from "@clerk/clerk-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20  lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SignedIn>
        <div
          className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
      </SignedIn>
      {/* Main content */}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
