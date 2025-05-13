import Image from 'next/image';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white shadow-xl p-6 w-full max-w-2xl mx-auto rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col items-center space-y-4">
<Image
  src="https://randomuser.me/api/portraits/men/1.jpg"
  width={100}
  height={100}
  alt="Test User"
/>
        <h2 className="text-xl font-semibold text-gray-800">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <div className="text-sm text-gray-600 space-y-1 text-center">
          <p><span className="font-medium text-gray-700">Gender:</span> {user.gender}</p>
          <p><span className="font-medium text-gray-700">Email:</span> {user.email}</p>
          <p><span className="font-medium text-gray-700">Phone:</span> {user.phone}</p>
          <p><span className="font-medium text-gray-700">Country:</span> {user.location.country}</p>
        </div>
      </div>
    </div>
  );
}
