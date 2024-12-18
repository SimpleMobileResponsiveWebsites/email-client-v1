import React from 'react';
import { Edit } from 'lucide-react';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarSettings } from './SidebarSettings';
import { Button } from '../ui/Button';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <Button variant="primary" className="w-full mb-6">
        <Edit size={20} />
        <span>Compose</span>
      </Button>
      
      <SidebarNavigation />
      <SidebarSettings />
    </div>
  );
}