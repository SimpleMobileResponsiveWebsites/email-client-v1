import React from 'react';
import { Star, Clock } from 'lucide-react';

const emails = [
  {
    id: 1,
    sender: 'GitHub',
    subject: 'Action required: Please verify your email address',
    preview: 'Click the link below to verify your email address...',
    time: '10:30 AM',
    isStarred: true,
    isUnread: true,
  },
  {
    id: 2,
    sender: 'Alice Johnson',
    subject: 'Project Update - Q1 2024',
    preview: 'Here are the latest updates on our ongoing projects...',
    time: '9:15 AM',
    isStarred: false,
    isUnread: true,
  },
  {
    id: 3,
    sender: 'Newsletter',
    subject: 'Your Weekly Tech Digest',
    preview: 'Top stories in technology this week...',
    time: 'Yesterday',
    isStarred: false,
    isUnread: false,
  },
  // Add more email items here
];

export default function EmailList() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="border-b sticky top-0 bg-white z-10">
        <div className="flex items-center gap-4 p-4">
          <input
            type="text"
            placeholder="Search emails..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="divide-y">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer ${
              email.isUnread ? 'bg-blue-50' : ''
            }`}
          >
            <button className="text-gray-400 hover:text-yellow-400">
              <Star size={20} fill={email.isStarred ? 'currentColor' : 'none'} />
            </button>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={`font-medium ${email.isUnread ? 'text-black' : 'text-gray-600'}`}>
                  {email.sender}
                </p>
              </div>
              <p className={`truncate ${email.isUnread ? 'font-medium' : ''}`}>
                {email.subject}
              </p>
              <p className="text-sm text-gray-500 truncate">{email.preview}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} />
              <span className="text-sm whitespace-nowrap">{email.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}