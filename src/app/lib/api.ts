import { RandomUserApiResponse, User } from '../types';

export async function fetchUsers(count: number = 100): Promise<User[]> {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data: RandomUserApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}