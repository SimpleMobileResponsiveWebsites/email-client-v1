import { useState } from 'react';
import { Email } from '../types/email';

const initialEmails: Email[] = [
  {
    id: 1,
    sender: 'GitHub',
    subject: 'Action required: Please verify your email address',
    preview: 'Click the link below to verify your email address...',
    time: '10:30 AM',
    isStarred: true,
    isUnread: true,
  },
  {
    id: 2,
    sender: 'Alice Johnson',
    subject: 'Project Update - Q1 2024',
    preview: 'Here are the latest updates on our ongoing projects...',
    time: '9:15 AM',
    isStarred: false,
    isUnread: true,
  },
  {
    id: 3,
    sender: 'Newsletter',
    subject: 'Your Weekly Tech Digest',
    preview: 'Top stories in technology this week...',
    time: 'Yesterday',
    isStarred: false,
    isUnread: false,
  },
];

export function useEmails() {
  const [emails] = useState<Email[]>(initialEmails);
  return { emails };
}