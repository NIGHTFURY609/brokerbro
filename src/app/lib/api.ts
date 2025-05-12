

// Optimized API Utility
import { cache } from 'react';
import { RandomUserApiResponse, User } from '../types/user';

export const fetchUsers = cache(async (count: number = 100): Promise<User[]> => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data: RandomUserApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
});