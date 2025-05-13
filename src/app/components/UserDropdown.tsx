'use client';

import { useState, Suspense, lazy } from 'react';
import { User } from '../types/user';

// Lazy load the dropdown content
const UserDropdownContent = lazy(() => import('./UserDropdownContent'));

interface UserDropdownProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

export default function UserDropdown({ users, onUserSelect }: UserDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto ">
      <input 
      id="searchInput"
        type="text" 
        placeholder="Search users by first name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow bg-white placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      
      {isOpen && searchTerm && (
        <Suspense fallback={
          <div className="absolute mt-2 w-full z-50 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 max-h-96 overflow-y-auto">
            Loading...
          </div>
        }>
          <UserDropdownContent 
            users={users}
            searchTerm={searchTerm}
            onUserSelect={(user) => {
              onUserSelect(user);
              setSearchTerm('');
              setIsOpen(false);
            }}
          />
        </Suspense>
      )}
    </div>
  );
}