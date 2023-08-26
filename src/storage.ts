import { produce } from "immer"

import { DEFAULT_PHASES, STORAGE_KEY } from "./consts"
import { IPhase } from "./types"

export const getPhases = (): IPhase[] => {
	const data = window.localStorage.getItem(STORAGE_KEY)
	return data ? JSON.parse(data) as unknown as IPhase[] : DEFAULT_PHASES
}

export const toggleTask = async (phaseIndex: number, taskIndex: number) => {
	const currentPhases = getPhases()
	const activeTask = currentPhases[phaseIndex].tasks[taskIndex]
	const updatedPhases = produce(getPhases(), (draft) => {
		draft[phaseIndex].tasks[taskIndex].done = !draft[phaseIndex].tasks[taskIndex].done
	})
	if (!activeTask.done) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPhases))
		return
	}
	// undoing the task
	const transformedPhases = updatedPhases.map((phase, index) => {
		if (index <= phaseIndex) return phase
		return {
			...phase,
			tasks: phase.tasks.map((task) => ({
				...task,
				done: false,
			}))
		}
	})
	// save to storage
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transformedPhases))
}
