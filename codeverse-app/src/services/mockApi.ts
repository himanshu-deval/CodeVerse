// Mock API service
// In a real application, you would use a library like Axios or fetch to make API calls.
// For this example, we'll simulate API calls with timeouts to mimic network latency.

export const mockLogin = (email: string, pass: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && pass === 'password') {
          resolve({
            data: {
              name: 'Test User',
              email: 'test@test.com',
            },
          });
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  };

  export const mockFetchUserProfile = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            name: 'Test User',
            email: 'test@test.com',
            bio: 'A passionate coder.',
            // ...other profile data
          },
        });
      }, 1000);
    });
  };

  export const mockFetchLeaderboard = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: 'Alice', score: 1500 },
            { id: 2, name: 'Bob', score: 1400 },
            { id: 3, name: 'Charlie', score: 1350 },
            // ...more leaderboard data
          ],
        });
      }, 1000);
    });
  };

  // You can add more mock API functions here as needed for other features.
