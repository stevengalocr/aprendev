export type ExerciseType =
  | 'multiple_choice'
  | 'code_multiple_choice'
  | 'fill_blank'
  | 'match_pairs'
  | 'order_code'

export interface Exercise {
  id: string
  type: ExerciseType
  question: string
  code?: string
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
  xpReward: number
}

export interface Lesson {
  id: string
  title: string
  description: string
  icon: string
  xpReward: number
  exercises: Exercise[]
  completed?: boolean
  locked?: boolean
}

export interface Unit {
  id: string
  title: string
  description: string
  color: string
  lessons: Lesson[]
  completed?: boolean
  locked?: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  icon: string
  color: string
  gradient: string
  category: 'web' | 'ai' | 'backend' | 'devops' | 'cs'
  units: Unit[]
  totalLessons: number
  totalXP: number
}

export interface UserStats {
  totalXP: number
  level: number
  streak: number
  longestStreak: number
  hearts: number
  maxHearts: number
  completedLessons: string[]
  completedUnits: string[]
  lastPracticeDate: string | null
  gems: number
  username: string
  avatar: string
}

export interface LessonResult {
  lessonId: string
  score: number
  totalExercises: number
  xpEarned: number
  correctAnswers: number
  wrongAnswers: number
  timeSpent: number
}

export interface LeaderboardEntry {
  rank: number
  username: string
  avatar: string
  xp: number
  streak: number
  level: number
}

export interface MatchPair {
  left: string
  right: string
}
