'use client';

import { useState } from 'react';
import { User } from '../types/user';

interface UserDropdownProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

export default function UserDropdown({ users, onUserSelect }: UserDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredUsers = users.filter(user => 
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user: User) => {
    onUserSelect(user);
    setSearchTerm('');
    setIsOpen(false);
  };

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
        <ul className="absolute z-10 w-full max-h-60 overflow-y-auto 
                       bg-container-bg rounded-md shadow-lg mt-1">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <li 
                key={index}
                onClick={() => handleUserSelect(user)}
                className="p-3 hover:bg-highlight/30 cursor-pointer 
                           border-b last:border-b-0 border-primary-text/10"
              >
                {user.name.first} {user.name.last}
              </li>
            ))
          ) : (
            <li className="p-3 text-primary-text/70">No users found</li>
          )}
        </ul>
      )}
    </div>
  );
}