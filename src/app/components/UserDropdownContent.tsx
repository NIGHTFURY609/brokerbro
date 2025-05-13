

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
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (text: string, term: string) => {
    const index = text.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <span className="bg-yellow-200 text-gray-900 font-semibold">
          {text.slice(index, index + term.length)}
        </span>
        {text.slice(index + term.length)}
      </>
    );
  };

  return (
    <ul className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto 
               bg-white rounded-xl shadow-lg border border-gray-200">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => (
          <li 
            key={index}
            onClick={() => onUserSelect(user)}
            className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-gray-800"
          >
            <div className="text-sm font-medium">
              {highlightMatch(user.name.first, searchTerm)}{' '}
              {highlightMatch(user.name.last, searchTerm)}
            </div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </li>
        ))
      ) : (
        <li className="px-4 py-3 text-gray-500 text-sm">No users found</li>
      )}
    </ul>
  );
}
