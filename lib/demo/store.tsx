'use client'
import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import { DemoState, DemoAction } from './types'
import { demoReducer, DEFAULT_STATE } from './engine'

const STORAGE_KEY = 'aprendev_demo_v2'

interface DemoContextValue {
  state: DemoState
  dispatch: React.Dispatch<DemoAction>
  advanceDay: (days?: number) => void
  resetDemo: () => void
  completeLesson: (lessonId: string, xpEarned: number, score: number) => void
  loseHeart: () => void
  spendGems: (amount: number) => boolean
  completeChallenge: (challengeId: string, xpEarned: number) => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

function loadState(): DemoState {
  if (typeof window === 'undefined') return DEFAULT_STATE
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    return { ...DEFAULT_STATE, ...JSON.parse(raw) as DemoState }
  } catch {
    return DEFAULT_STATE
  }
}

function saveState(state: DemoState): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // storage full or unavailable
  }
}

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, DEFAULT_STATE, loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const advanceDay = useCallback((days = 1) => {
    dispatch({ type: 'ADVANCE_DAY', payload: { days } })
  }, [])

  const resetDemo = useCallback(() => {
    dispatch({ type: 'RESET_DEMO' })
  }, [])

  const completeLesson = useCallback((lessonId: string, xpEarned: number, score: number) => {
    dispatch({ type: 'COMPLETE_LESSON', payload: { lessonId, xpEarned, score } })
  }, [])

  const loseHeart = useCallback(() => {
    dispatch({ type: 'LOSE_HEART' })
  }, [])

  const spendGems = useCallback((amount: number): boolean => {
    if (state.gems < amount) return false
    dispatch({ type: 'SPEND_GEMS', payload: { amount } })
    return true
  }, [state.gems])

  const completeChallenge = useCallback((challengeId: string, xpEarned: number) => {
    dispatch({ type: 'COMPLETE_CHALLENGE', payload: { challengeId, xpEarned } })
  }, [])

  return (
    <DemoContext.Provider value={{
      state,
      dispatch,
      advanceDay,
      resetDemo,
      completeLesson,
      loseHeart,
      spendGems,
      completeChallenge,
    }}>
      {children}
    </DemoContext.Provider>
  )
}

export function useDemoStore() {
  const ctx = useContext(DemoContext)
  if (!ctx) throw new Error('useDemoStore must be used inside DemoProvider')
  return ctx
}
