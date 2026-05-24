import { DemoState, DemoAction, BotPlayer, Badge } from './types'
import { getLevel, getLevelTitle } from '@/lib/utils'

export const BADGES: Badge[] = [
  { id: 'streak-7',      name: 'Racha de 7 días',   description: 'Practica 7 días seguidos',      icon: '🔥', locked: true },
  { id: 'streak-30',     name: 'Mes de código',      description: 'Practica 30 días seguidos',     icon: '🗓️', locked: true },
  { id: 'first-deploy',  name: 'Primer Deploy',      description: 'Completa tu primera lección',   icon: '🚀', locked: true },
  { id: 'js-expert',     name: 'JS Expert',          description: 'Completa el track de JavaScript', icon: '⚡', locked: true },
  { id: 'ai-lover',      name: 'AI Lover',           description: 'Completa 5 lecciones de IA',    icon: '🤖', locked: true },
  { id: 'perfect-score', name: 'Perfecto',           description: 'Obtén 100% en una lección',     icon: '⭐', locked: true },
  { id: 'level-10',      name: 'Nivel 10',           description: 'Alcanza el nivel 10',           icon: '🏆', locked: true },
  { id: 'speed-runner',  name: 'Speed Runner',       description: 'Completa 3 lecciones en un día', icon: '⚡', locked: true },
]

const INITIAL_BOTS: BotPlayer[] = [
  { id: 'bot1', username: 'CodeMaster',   avatar: '👨‍💻', xp: 2100, level: 8,  streak: 14, xpPerDay: 180 },
  { id: 'bot2', username: 'AnaDev',       avatar: '👩‍💻', xp: 2450, level: 9,  streak: 21, xpPerDay: 220 },
  { id: 'bot3', username: 'DevKing',      avatar: '🧑‍💻', xp: 1870, level: 7,  streak: 9,  xpPerDay: 150 },
  { id: 'bot4', username: 'ProgramadorX', avatar: '👨‍💻', xp: 1650, level: 7,  streak: 5,  xpPerDay: 130 },
  { id: 'bot5', username: 'YoungDev',     avatar: '👩‍💻', xp: 980,  level: 5,  streak: 3,  xpPerDay: 90  },
  { id: 'bot6', username: 'ScriptBoi',    avatar: '🧑‍💻', xp: 870,  level: 4,  streak: 2,  xpPerDay: 70  },
]

export const DEFAULT_STATE: DemoState = {
  username: 'Tú',
  avatar: '🐧',
  totalXP: 1250,
  gems: 320,
  hearts: 5,
  maxHearts: 5,
  streak: 0,
  longestStreak: 0,
  completedLessons: [],
  completedChallengeIds: [],
  unlockedBadgeIds: [],
  simulatedDay: 0,
  lastPracticeDay: null,
  lastHeartRefillDay: null,
  bots: INITIAL_BOTS,
  onboardingDone: false,
  selectedTrack: null,
  dailyGoalMinutes: 10,
}

export function checkBadges(state: DemoState): string[] {
  const newBadges: string[] = []
  const b = state.unlockedBadgeIds

  if (!b.includes('first-deploy') && state.completedLessons.length >= 1)
    newBadges.push('first-deploy')
  if (!b.includes('streak-7') && state.streak >= 7)
    newBadges.push('streak-7')
  if (!b.includes('streak-30') && state.streak >= 30)
    newBadges.push('streak-30')
  if (!b.includes('level-10') && getLevel(state.totalXP) >= 10)
    newBadges.push('level-10')
  if (!b.includes('perfect-score') && state.completedLessons.some(l => l.score === 100))
    newBadges.push('perfect-score')

  const todayLessons = state.completedLessons.filter(
    l => l.completedAt.startsWith(`day-${state.simulatedDay}`)
  )
  if (!b.includes('speed-runner') && todayLessons.length >= 3)
    newBadges.push('speed-runner')

  return newBadges
}

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {

    case 'COMPLETE_LESSON': {
      const { lessonId, xpEarned, score } = action.payload as { lessonId: string; xpEarned: number; score: number }
      const alreadyDone = state.completedLessons.some(l => l.lessonId === lessonId)

      const newXP = state.totalXP + xpEarned
      const gemsEarned = Math.floor(xpEarned / 10)

      // Update streak
      let newStreak = state.streak
      let newLongest = state.longestStreak
      if (state.lastPracticeDay !== state.simulatedDay) {
        const consecutive = state.lastPracticeDay === state.simulatedDay - 1
        newStreak = consecutive ? state.streak + 1 : 1
        newLongest = Math.max(newLongest, newStreak)
      }

      const newCompleted = alreadyDone
        ? state.completedLessons
        : [
            ...state.completedLessons,
            {
              lessonId,
              score,
              xpEarned,
              completedAt: `day-${state.simulatedDay}`,
            },
          ]

      const updated: DemoState = {
        ...state,
        totalXP: newXP,
        gems: state.gems + gemsEarned,
        streak: newStreak,
        longestStreak: newLongest,
        lastPracticeDay: state.simulatedDay,
        completedLessons: newCompleted,
      }

      const newBadges = checkBadges(updated)
      return {
        ...updated,
        unlockedBadgeIds: [...updated.unlockedBadgeIds, ...newBadges],
      }
    }

    case 'LOSE_HEART': {
      return { ...state, hearts: Math.max(0, state.hearts - 1) }
    }

    case 'SPEND_GEMS': {
      const { amount } = action.payload as { amount: number }
      return { ...state, gems: Math.max(0, state.gems - amount) }
    }

    case 'EARN_GEMS': {
      const { amount } = action.payload as { amount: number }
      return { ...state, gems: state.gems + amount }
    }

    case 'COMPLETE_CHALLENGE': {
      const { challengeId, xpEarned } = action.payload as { challengeId: string; xpEarned: number }
      if (state.completedChallengeIds.includes(challengeId)) return state
      return {
        ...state,
        totalXP: state.totalXP + xpEarned,
        gems: state.gems + 30,
        completedChallengeIds: [...state.completedChallengeIds, challengeId],
      }
    }

    case 'ADVANCE_DAY': {
      const { days = 1 } = (action.payload ?? {}) as { days?: number }
      const newDay = state.simulatedDay + (days as number)

      // Update bots XP
      const updatedBots = state.bots.map(bot => ({
        ...bot,
        xp: bot.xp + bot.xpPerDay * (days as number),
        level: getLevel(bot.xp + bot.xpPerDay * (days as number)),
        streak: bot.streak + (days as number),
      }))

      // Check if streak breaks (no practice yesterday)
      const practicedYesterday = state.lastPracticeDay === state.simulatedDay
      const newStreak = practicedYesterday ? state.streak : 0

      // Refill hearts every day
      return {
        ...state,
        simulatedDay: newDay,
        streak: newStreak,
        hearts: state.maxHearts,
        lastHeartRefillDay: newDay,
        bots: updatedBots,
      }
    }

    case 'UNLOCK_BADGE': {
      const { badgeId } = action.payload as { badgeId: string }
      if (state.unlockedBadgeIds.includes(badgeId)) return state
      return { ...state, unlockedBadgeIds: [...state.unlockedBadgeIds, badgeId] }
    }

    case 'SET_USERNAME': {
      const { username, avatar } = action.payload as { username: string; avatar?: string }
      return { ...state, username, ...(avatar ? { avatar } : {}) }
    }

    case 'FINISH_ONBOARDING': {
      const { username, selectedTrack, dailyGoalMinutes } = action.payload as {
        username: string
        selectedTrack: string
        dailyGoalMinutes: number
      }
      return {
        ...state,
        username,
        selectedTrack,
        dailyGoalMinutes,
        onboardingDone: true,
        streak: 0,
        simulatedDay: 0,
        lastPracticeDay: null,
      }
    }

    case 'RESET_DEMO': {
      return { ...DEFAULT_STATE, bots: INITIAL_BOTS }
    }

    default:
      return state
  }
}

export function getLeaderboard(state: DemoState) {
  const me = {
    id: 'me',
    username: state.username,
    avatar: state.avatar,
    xp: state.totalXP,
    level: getLevel(state.totalXP),
    streak: state.streak,
    isMe: true,
  }

  const all = [
    me,
    ...state.bots.map(b => ({ ...b, isMe: false })),
  ].sort((a, b) => b.xp - a.xp)

  return all.map((entry, i) => ({ ...entry, rank: i + 1 }))
}

export function getHeartRefillTime(state: DemoState): string {
  if (state.hearts >= state.maxHearts) return ''
  const minutesPerHeart = 20
  const heartsNeeded = state.maxHearts - state.hearts
  const totalMinutes = heartsNeeded * minutesPerHeart
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}
