import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Tooltip from '@mui/material/Tooltip'

import { useMutateTask } from '../hooks'
import { ITask } from "../types"

interface IProps {
	task: ITask
	phaseIndex: number
	taskIndex: number
	isLocked: boolean
	isNextPhaseInProgress: boolean
}

export default function Task(props: IProps) {
	const { task, phaseIndex, taskIndex, isLocked, isNextPhaseInProgress } = props
	const { mutate } = useMutateTask(phaseIndex, taskIndex)

	const tooltipContent = React.useMemo(() => {
		if (isLocked) {
			return 'Before checking this box, ensure that all previous phases have been successfully completed. This checkbox signifies the completion of a task, but keep in mind that it can only be marked as complete once all preceding phases have been fulfilled. Your progress is in your hands! 🚀'
		}
		if (isNextPhaseInProgress) {
			return 'Undoing this task will not only reverse its completion but also revert all subsequent phases back to their original state. Consider the implications carefully, as your action will ripple through the progress you\'ve made so far. Choose wisely! 🔄'
		}
		return null
	}, [isLocked, isNextPhaseInProgress])

	if (!tooltipContent) {
		return <FormControlLabel control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} checked={task.done} onChange={() => mutate()} />} label={task.title} />
	}

	return (
		<Tooltip title={tooltipContent} arrow placement='bottom-start'>
			<FormControlLabel
				sx={{width: 'fit-content'}}
				control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} checked={task.done} onChange={() => mutate()} disabled={isLocked} />}
				label={task.title} />
		</Tooltip>
	)
}