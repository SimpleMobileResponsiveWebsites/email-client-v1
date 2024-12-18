import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Email } from '../../types/email';

interface EmailItemProps {
  email: Email;
}

export function EmailItem({ email }: EmailItemProps) {
  return (
    <div
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
  );
}