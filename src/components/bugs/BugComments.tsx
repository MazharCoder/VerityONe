import React, { useState } from 'react';
import { Image, Paperclip, Send, UserCircle } from 'lucide-react';

const BugComments = () => {
  const [newComment, setNewComment] = useState('');

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex">
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-3">
          <UserCircle size={20} />
        </div>
        <div className="flex-1 relative">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600">
              <Image size={16} />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Paperclip size={16} />
            </button>
            <button className="p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugComments;