export interface UserStory {
    id: string;
    name: string;
    description: string;
    subtasks: string[];
    acceptanceCriteria: string[];
    owner: string;
    estimation: string;
    additionalDetails?: {
      [key: string]: any;
    };
  }