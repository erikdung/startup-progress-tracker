import { produce } from "immer"

import { DEFAULT_MILESTONES, STORAGE_KEY } from "./consts"
import { IMilestone } from "./types"

export const getMilestones = (): IMilestone[] => {
	const data = window.localStorage.getItem(STORAGE_KEY)
	return data ? JSON.parse(data) as unknown as IMilestone[] : DEFAULT_MILESTONES
}

export const toggleStep = async (milestoneIndex: number, stepIndex: number) => {
	const currentMilestones = getMilestones()
	const activeStep = currentMilestones[milestoneIndex].steps[stepIndex]
	// finish the step
	if (!activeStep.done) {
		// build the final state
		const updatedMilestones = produce(getMilestones(), (draft) => {
			draft[milestoneIndex].steps[stepIndex].done = !draft[milestoneIndex].steps[stepIndex].done
		})
		// save to storage
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMilestones))
		return
	}
	// undoing the step
	// get all steps
	const allSteps = currentMilestones.flatMap((milestone) => milestone.steps)
	// find the current active step index
	const activeStepIndex = allSteps.findIndex((step) => step.title === activeStep.title)
	// change the state of all subsequence steps
	const allStepsStateMap = allSteps.reduce<Record<string, boolean>>((acc, step, index) => {
		acc[step.title] = index < activeStepIndex ? step.done : false
		return acc
	}, {})
	// build the final state
	const updatedMilestones = currentMilestones.map((milestone) => ({
		...milestone,
		steps: milestone.steps.map((step) => ({
			...step,
			done: allStepsStateMap[step.title],
		}))
	}))
	// save to storage
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMilestones))
}
