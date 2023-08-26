import React from 'react'
import Stack from '@mui/material/Stack'

import { useGetPhases } from '../hooks'
import Phase from './Phase'

export default function PhasesList () {
	const { data: phases } = useGetPhases()

	if (!phases) return null

	return <Stack spacing={2}>
		{phases.map((phase, index) => <Phase
			key={phase.title}
			index={index}
			isLocked={index !== 0 && phases[index - 1]?.tasks.some((task) => !task.done)}
			isNextPhaseInProgress={Boolean(phases[index + 1]?.tasks.some((task) => task.done))}
			phase={phase} />)}
	</Stack>
}