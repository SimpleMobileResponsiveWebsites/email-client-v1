import React from 'react';
import { SearchBar } from '../ui/SearchBar';
import { EmailItem } from './EmailItem';
import { useEmails } from '../../hooks/useEmails';

export default function EmailList() {
  const { emails } = useEmails();

  return (
    <div className="flex-1 overflow-auto">
      <div className="border-b sticky top-0 bg-white z-10 p-4">
        <SearchBar placeholder="Search emails..." />
      </div>

      <div className="divide-y">
        {emails.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}