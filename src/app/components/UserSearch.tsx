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
    <div className="space-y-6">
      <UserDropdown 
        users={initialUsers} 
        onUserSelect={handleUserSelect} 
      />
      
      {selectedUser && (
        <div className="mt-6">
          <UserCard user={selectedUser} />
        </div>
      )}
    </div>
  );
}