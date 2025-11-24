import type { Competition } from '@/types/competition';

export const mockCompetitions: Competition[] = [
  {
    id: '1',
    title: 'CodeVerse Weekly Contest #1',
    description: 'The first weekly contest of CodeVerse. Test your skills and win prizes!',
    startTime: '2025-12-01T18:00:00Z',
    endTime: '2025-12-01T20:00:00Z',
    problems: [
      {
        id: '101',
        title: 'Two Sum',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        difficulty: 'Easy',
        tags: ['Array', 'Hash Table'],
        testCases: [
          { id: '1', input: 'nums = [2,7,11,15], target = 9', expectedOutput: '[0,1]' },
          { id: '2', input: 'nums = [3,2,4], target = 6', expectedOutput: '[1,2]' },
        ],
      },
      {
        id: '102',
        title: 'Add Two Numbers',
        description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
        difficulty: 'Medium',
        tags: ['Linked List', 'Math'],
        testCases: [
          { id: '1', input: 'l1 = [2,4,3], l2 = [5,6,4]', expectedOutput: '[7,0,8]' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'CodeVerse Weekend Challenge',
    description: 'A weekend challenge to keep you sharp. 3 problems in 3 hours.',
    startTime: '2025-12-05T12:00:00Z',
    endTime: '2025-12-05T15:00:00Z',
    problems: [
        {
            id: '201',
            title: 'Longest Substring Without Repeating Characters',
            description: 'Given a string s, find the length of the longest substring without repeating characters.',
            difficulty: 'Medium',
            tags: ['Hash Table', 'String', 'Sliding Window'],
            testCases: [
              { id: '1', input: 's = "abcabcbb"', expectedOutput: '3' },
              { id: '2', input: 's = "bbbbb"', expectedOutput: '1' },
            ],
          },
    ],
  },
];
