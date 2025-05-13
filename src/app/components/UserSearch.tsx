'use client';

import { useState } from 'react';
import { User } from '../types/user';
import UserDropdown from './UserDropdown';
import UserCard from './UserCard';

interface UserSearchProps {
  initialUsers: User[];
}

export default function UserSearch({ initialUsers }: UserSearchProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="relative flex flex-col items-center px-4 py-8 space-y-6 max-w-4xl mx-auto">
      {/* Search Dropdown */}
      <div className="w-full">
        <UserDropdown 
          users={initialUsers} 
          onUserSelect={handleUserSelect} 
        />
      </div>

      {/* Selected User Display */}
      {selectedUser && (
        <div className="w-full">
          <UserCard user={selectedUser} />
        </div>
      )}
    </div>
  );
}
