import React from 'react';
import { Inbox, Send, Archive, Trash, Star } from 'lucide-react';
import { NavItem } from '../ui/NavItem';

const menuItems = [
  { icon: Inbox, label: 'Inbox', count: 12 },
  { icon: Star, label: 'Starred', count: 4 },
  { icon: Send, label: 'Sent', count: 0 },
  { icon: Archive, label: 'Archive', count: 0 },
  { icon: Trash, label: 'Trash', count: 0 },
];

export function SidebarNavigation() {
  return (
    <nav className="flex-1">
      {menuItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          count={item.count}
        />
      ))}
    </nav>
  );
}