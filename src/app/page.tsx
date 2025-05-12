

import { Suspense } from 'react';
import { fetchUsers } from './lib/api';
import UserSearch from './components/UserSearch';
import UserSearchSkeleton from './components/UserSearchSkeleton';

export default async function Home() {
  const users = await fetchUsers(100);

  return (
    <main className="space-y-6">
      <Suspense fallback={<UserSearchSkeleton />}>
        <UserSearch initialUsers={users} />
      </Suspense>
    </main>
  );
}