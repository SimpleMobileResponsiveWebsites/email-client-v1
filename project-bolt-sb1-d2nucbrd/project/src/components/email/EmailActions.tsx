import React from 'react';
import { Reply, Forward } from 'lucide-react';
import { Button } from '../ui/Button';

export function EmailActions() {
  return (
    <div className="flex items-center gap-4 mt-8">
      <Button variant="primary">
        <Reply size={20} />
        Reply
      </Button>
      <Button variant="secondary">
        <Forward size={20} />
        Forward
      </Button>
    </div>
  );
}