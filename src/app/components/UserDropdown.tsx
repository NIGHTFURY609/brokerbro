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
        className="input-field"
      />
      
      {isOpen && searchTerm && (
        <Suspense fallback={
          <div className="dropdown-container p-4 text-slate-500">
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