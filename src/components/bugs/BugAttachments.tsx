import React from 'react';
import { Paperclip } from 'lucide-react';

interface Attachment {
  name: string;
  size: string;
}

interface BugAttachmentsProps {
  attachments: Attachment[];
}

const BugAttachments: React.FC<BugAttachmentsProps> = ({ attachments }) => {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
      <div className="flex flex-wrap gap-2">
        {attachments.map((attachment, index) => (
          <div 
            key={index}
            className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2"
          >
            <Paperclip size={14} className="mr-2 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">{attachment.name}</p>
              <p className="text-xs text-gray-500">{attachment.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BugAttachments;