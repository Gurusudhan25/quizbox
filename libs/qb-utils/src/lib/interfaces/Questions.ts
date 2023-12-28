export interface IQuestions {
  id: PropertyKey,
  question: string,
  description?: string,
  answers: answers,
  multiple_correct_answers: string,
  correct_answers?: {
    answer_a_correct: 'false' | 'true',
    answer_b_correct: 'false' | 'true',
    answer_c_correct: 'false' | 'true',
    answer_d_correct: 'false' | 'true',
    answer_e_correct: 'false' | 'true',
    answer_f_correct: 'false' | 'true'
  },
  correct_answer: keyof answers,
  explanation?: null,
  tip?: null,
  tags?: string,
  category?: string,
  difficulty: difficultyLevel
}


export interface answers {
  answer_a: string | null,
  answer_b: string | null,
  answer_c?: string | null,
  answer_d?: string | null,
  answer_e?: string | null,
  answer_f?: string | null
}

export enum difficultyLevel {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
};

export interface Questions extends answers {
  id: PropertyKey,
  question: string,
  correctOpt: string,
  isMultiCorrect: string,
}