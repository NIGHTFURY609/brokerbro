


import { fetchUsers } from './lib/api';
import UserSearch from './components/UserSearch';

export default async function Home() {
  const users = await fetchUsers(100);

  return (
    <main className="space-y-6">
      <UserSearch initialUsers={users} />
    </main>
  );
}