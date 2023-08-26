import React from 'react'
import Stack from '@mui/material/Stack'

import { useGetMilestones } from '../hooks'
import Milestone from './Milestone'
import { ITransformedMilestone } from '../types'

export default function MilestonesList () {
	const { data: milestones } = useGetMilestones()

	const transformedMilstones = React.useMemo<ITransformedMilestone[]>(() => {
		if (!milestones) return []
		// get all steps without grouping in milestones
		const allSteps = milestones.flatMap((milestone) => milestone.steps)
		// create map of steps with helper data
		const stepsMap = allSteps.reduce<Record<string, {previousStepFinished: boolean, nextStepFinished: boolean}>>((acc, step, index) => {
			acc[step.title] = {
				previousStepFinished: index === 0 || allSteps[index - 1].done,
				nextStepFinished: index === allSteps.length - 1 || allSteps[index + 1].done,
			}
			return acc
		}, {})
		return milestones.map((milestone) => {
			// create milestones helper data
			const hasAllStepsFinished = milestone.steps.every((step) => step.done)
			const hasSomeStepsFinished = !hasAllStepsFinished && milestone.steps.some((step) => step.done)
			return {
				...milestone,
				hasAllStepsFinished,
				hasSomeStepsFinished,
				steps: milestone.steps.map((step) => {
					return {
						...step,
						// add steps helper data
						...stepsMap[step.title]
					}
				})
			}
		})

	}, [milestones])

	return <Stack spacing={2}>
		{transformedMilstones.map((milestone, index) => <Milestone key={milestone.title} index={index} milestone={milestone} />)}
	</Stack>
}