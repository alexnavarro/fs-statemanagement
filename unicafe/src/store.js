import { create } from 'zustand'
import { useShallow } from "zustand/react/shallow"

const useFeedbackStore = create(set => ({
    totalGood: 0,
    totalNeutral: 0,
    totalBad:0,
    actions: {
        good: () => set(state => ({
            totalGood: state.totalGood + 1,
        })),
        bad: () => set(state => ({
            totalBad: state.totalBad + 1,

        })),
        neutral: () => set(state => ({
            totalNeutral: state.totalNeutral + 1,
        })),
    }
}))

export const useValues = () => useFeedbackStore(
    useShallow((state) => ({
        good: state.totalGood,
        bad: state.totalBad,
        neutral: state.totalNeutral,
    })),
)

export const useFeedbackControls = () => useFeedbackStore(state => state.actions)