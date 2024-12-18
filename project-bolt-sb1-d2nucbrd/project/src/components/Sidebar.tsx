import React from 'react';
import { Inbox, Send, Archive, Trash, Star, Edit, Settings } from 'lucide-react';

const menuItems = [
  { icon: Inbox, label: 'Inbox', count: 12 },
  { icon: Star, label: 'Starred', count: 4 },
  { icon: Send, label: 'Sent', count: 0 },
  { icon: Archive, label: 'Archive', count: 0 },
  { icon: Trash, label: 'Trash', count: 0 },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <button className="w-full bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center gap-2 mb-6 hover:bg-blue-700 transition-colors">
        <Edit size={20} />
        <span>Compose</span>
      </button>
      
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 mb-1"
          >
            <item.icon size={20} />
            <span className="flex-1">{item.label}</span>
            {item.count > 0 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-sm">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}