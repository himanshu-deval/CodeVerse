export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  testCases: TestCase[];
}

export interface Submission {
  id: string;
  problemId: string;
  userId: string;
  code: string;
  language: string;
  status: 'Pending' | 'Running' | 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Compilation Error';
  createdAt: string;
}

export interface Competition {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  problems: Problem[];
}
