import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
}

export function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <Icon size={20} />
    </button>
  );
}