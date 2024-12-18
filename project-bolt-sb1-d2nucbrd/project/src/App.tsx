import React from 'react';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailView from './components/EmailView';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <EmailList />
      <EmailView />
    </div>
  );
}

export default App;