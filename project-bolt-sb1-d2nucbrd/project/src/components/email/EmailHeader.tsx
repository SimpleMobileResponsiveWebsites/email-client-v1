import React from 'react';
import { ArrowLeft, Archive, Trash, MoreHorizontal } from 'lucide-react';
import { IconButton } from '../ui/IconButton';

export function EmailHeader() {
  return (
    <div className="border-b p-4 sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between mb-4">
        <IconButton icon={ArrowLeft} />
        <div className="flex items-center gap-2">
          <IconButton icon={Archive} />
          <IconButton icon={Trash} />
          <IconButton icon={MoreHorizontal} />
        </div>
      </div>
    </div>
  );
}