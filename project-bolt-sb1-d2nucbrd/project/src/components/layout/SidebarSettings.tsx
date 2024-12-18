import React from 'react';
import { Settings } from 'lucide-react';
import { NavItem } from '../ui/NavItem';

export function SidebarSettings() {
  return (
    <div className="mt-auto pt-4 border-t">
      <NavItem icon={Settings} label="Settings" />
    </div>
  );
}