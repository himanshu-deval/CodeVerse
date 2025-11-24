import type { User } from '@/types/auth';
import type { RegistrationData } from '@/types/registration';

export const mockApi = {
  login: ({ email, password }: Pick<RegistrationData, 'email' | 'password'>): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'password') {
          resolve({ name: 'Test User', email: 'test@test.com' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },
  register: ({ name, email, password }: RegistrationData): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          resolve({ name, email });
        } else {
          reject(new Error('Invalid registration data'));
        }
      }, 1000);
    });
  },
};