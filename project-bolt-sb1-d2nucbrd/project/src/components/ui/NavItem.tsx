import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  count?: number;
}

export function NavItem({ icon: Icon, label, count }: NavItemProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 mb-1"
    >
      <Icon size={20} />
      <span className="flex-1">{label}</span>
      {count !== undefined && count > 0 && (
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-sm">
          {count}
        </span>
      )}
    </a>
  );
}