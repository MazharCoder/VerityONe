import React, { useEffect } from "react";
import { Search, Bell, HelpCircle, UserCircle, Menu } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hidden md:block"
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-400 hidden md:block"
            size={18}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 relative">
        {/* Notification bell */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Help Icon */}
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
          <HelpCircle size={20} />
        </button>

        {/* User Area */}
        <div className="relative">
          <SignedIn>
            {/* ✅ Use Clerk's default UserButton (includes profile, manage account, sign out) */}
            <UserButton />
          </SignedIn>

          <SignedOut>
            <div
              className="flex items-center gap-2 pl-2 md:pl-4 border-l border-gray-200 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <UserCircle size={28} className="text-gray-600" />
              <span className="font-medium text-sm text-gray-700 hidden sm:block">
                Sign In
              </span>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;