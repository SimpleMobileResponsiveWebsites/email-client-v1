import React from 'react';

export function EmailContent() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Project Update - Q1 2024</h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Alice Johnson"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Alice Johnson</p>
            <p className="text-sm text-gray-500">alice@example.com</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">Mar 15, 2024, 9:15 AM</p>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">Hi Team,</p>
        <p className="mb-4">
          I hope this email finds you well. I wanted to share some updates regarding our Q1 2024 projects.
        </p>
        <p className="mb-4">
          We've made significant progress on all fronts, and I'm pleased to report that we're tracking well against our objectives. Here are the key highlights:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Project Alpha: 85% complete, on track for March delivery</li>
          <li>Project Beta: Successfully launched last week</li>
          <li>Project Gamma: Initial planning phase completed</li>
        </ul>
        <p className="mb-4">
          Let me know if you have any questions or concerns.
        </p>
        <p>Best regards,<br />Alice</p>
      </div>
    </>
  );
}