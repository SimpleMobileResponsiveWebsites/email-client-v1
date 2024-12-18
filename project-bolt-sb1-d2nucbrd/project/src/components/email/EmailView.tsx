import React from 'react';
import { EmailHeader } from './EmailHeader';
import { EmailContent } from './EmailContent';
import { EmailActions } from './EmailActions';

export default function EmailView() {
  return (
    <div className="w-[45%] border-l bg-white">
      <EmailHeader />
      <div className="p-6">
        <EmailContent />
        <EmailActions />
      </div>
    </div>
  );
}