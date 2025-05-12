'use client';

import { User } from '../types/user';

interface UserDropdownContentProps {
  users: User[];
  searchTerm: string;
  onUserSelect: (user: User) => void;
}

export default function UserDropdownContent({ 
  users, 
  searchTerm, 
  onUserSelect 
}: UserDropdownContentProps) {
  const filteredUsers = users.filter(user => 
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="absolute z-10 w-full max-h-60 overflow-y-auto 
                   bg-container-bg rounded-md shadow-lg mt-1">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => (
          <li 
            key={index}
            onClick={() => onUserSelect(user)}
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
  );
}