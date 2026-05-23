import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { UserStats } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLevel(xp: number): number {
  if (xp < 100) return 1
  if (xp < 300) return 2
  if (xp < 600) return 3
  if (xp < 1000) return 4
  if (xp < 1500) return 5
  if (xp < 2200) return 6
  if (xp < 3000) return 7
  if (xp < 4000) return 8
  if (xp < 5500) return 9
  return Math.floor(10 + (xp - 5500) / 1500)
}

export function getXPForLevel(level: number): number {
  const thresholds = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5500]
  if (level <= 10) return thresholds[level - 1] ?? 0
  return 5500 + (level - 10) * 1500
}

export function getXPProgress(xp: number): { current: number; needed: number; percentage: number } {
  const level = getLevel(xp)
  const currentLevelXP = getXPForLevel(level)
  const nextLevelXP = getXPForLevel(level + 1)
  const current = xp - currentLevelXP
  const needed = nextLevelXP - currentLevelXP
  return { current, needed, percentage: Math.round((current / needed) * 100) }
}

export function getLevelTitle(level: number): string {
  const titles: Record<number, string> = {
    1: 'Bug Hunter',
    2: 'Script Kiddie',
    3: 'Junior Dev',
    4: 'Code Wizard',
    5: 'Senior Dev',
    6: 'Tech Lead',
    7: 'Architect',
    8: 'Principal',
    9: 'CTO',
    10: 'Legend',
  }
  return titles[Math.min(level, 10)] ?? 'Legend+'
}

export function isStreakAlive(lastPracticeDate: string | null): boolean {
  if (!lastPracticeDate) return false
  const last = new Date(lastPracticeDate)
  const now = new Date()
  const diffMs = now.getTime() - last.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  return diffDays < 2
}

export function formatXP(xp: number): string {
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}k`
  return xp.toString()
}

const DEFAULT_STATS: UserStats = {
  totalXP: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  hearts: 5,
  maxHearts: 5,
  completedLessons: [],
  completedUnits: [],
  lastPracticeDate: null,
  gems: 50,
  username: 'Programador',
  avatar: '🧑‍💻',
}

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return DEFAULT_STATS
  try {
    const raw = localStorage.getItem('aprendev_stats')
    if (!raw) return DEFAULT_STATS
    const parsed = JSON.parse(raw) as UserStats
    return { ...DEFAULT_STATS, ...parsed }
  } catch {
    return DEFAULT_STATS
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('aprendev_stats', JSON.stringify(stats))
}

export function updateStreak(stats: UserStats): UserStats {
  const today = new Date().toDateString()
  if (stats.lastPracticeDate === today) return stats

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const isConsecutive = stats.lastPracticeDate === yesterday.toDateString()

  const newStreak = isConsecutive ? stats.streak + 1 : 1
  return {
    ...stats,
    streak: newStreak,
    longestStreak: Math.max(stats.longestStreak, newStreak),
    lastPracticeDate: today,
  }
}
