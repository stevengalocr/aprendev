export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt?: string
  locked: boolean
}

export interface CompletedLesson {
  lessonId: string
  score: number
  xpEarned: number
  completedAt: string
}

export interface BotPlayer {
  id: string
  username: string
  avatar: string
  xp: number
  level: number
  streak: number
  xpPerDay: number
}

export interface DemoState {
  // Identity
  username: string
  avatar: string

  // Gamification
  totalXP: number
  gems: number
  hearts: number
  maxHearts: number
  streak: number
  longestStreak: number

  // Progress
  completedLessons: CompletedLesson[]
  completedChallengeIds: string[]
  unlockedBadgeIds: string[]

  // Time simulation
  simulatedDay: number
  lastPracticeDay: number | null
  lastHeartRefillDay: number | null

  // Bots for leaderboard
  bots: BotPlayer[]

  // Onboarding
  onboardingDone: boolean
  selectedTrack: string | null
  dailyGoalMinutes: number
}

export interface DemoAction {
  type:
    | 'COMPLETE_LESSON'
    | 'LOSE_HEART'
    | 'SPEND_GEMS'
    | 'EARN_GEMS'
    | 'ADVANCE_DAY'
    | 'COMPLETE_CHALLENGE'
    | 'RESET_DEMO'
    | 'FINISH_ONBOARDING'
    | 'SET_USERNAME'
    | 'UNLOCK_BADGE'
  payload?: Record<string, unknown>
}
