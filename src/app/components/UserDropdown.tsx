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
    <div className="relative w-full max-w-md mx-auto">
      <input 
        type="text" 
        placeholder="Search users by first name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full p-3 rounded-md bg-input-bg text-primary-text 
                   placeholder-primary-text/70 focus:outline-none 
                   focus:ring-2 focus:ring-highlight"
      />
      
      {isOpen && searchTerm && (
        <Suspense fallback={<div>Loading...</div>}>
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