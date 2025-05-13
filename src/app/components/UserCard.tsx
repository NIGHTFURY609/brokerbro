import Image from 'next/image';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-container-bg rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
      <Image 
        src={user.picture.large} 
        alt={`${user.name.first} ${user.name.last}`}
        width={200} 
        height={200} 
        className="rounded-full border-4 border-highlight"
      />
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary-text">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <div className="mt-4 space-y-2 text-primary-text">
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Country:</strong> {user.location.country}</p>
        </div>
      </div>
    </div>
  );
}