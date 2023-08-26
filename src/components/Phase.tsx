import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { deepPurple } from '@mui/material/colors'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {Done, Sync, Pending, Lock} from '@mui/icons-material'
import {toast} from 'react-toastify'

import { IPhase } from '../types'
import Task from './Task'
import { getRandomFact } from '../remotes'

interface IProps {
	phase: IPhase
	isNextPhaseInProgress: boolean
	index: number
	isLocked: boolean
}

export default function Phase({ phase, index, isNextPhaseInProgress, isLocked }: IProps) {

	const [initialized, init] = React.useState(false)

	const isCompleted = phase.tasks.every((task) => task.done)

	const isInProgress = !isCompleted && phase.tasks.some((task) => task.done)

	const renderToast = React.useCallback(async () => {
		try {
			const data = await getRandomFact()
			toast(data.text)
		} catch (error) {
			console.error('Cannot render toast.')
		}
	}, [])

	React.useEffect(() => {
		// prevent firing toast on mount
		if (!initialized) {
			init(true)
			return
		}
		if (isCompleted) {
			renderToast()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCompleted])

	return (
		<Stack spacing={1}>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Avatar sx={{ bgcolor: deepPurple[300] }}>{index + 1}</Avatar>
					<Typography variant='h5'>{phase.title}</Typography>
				</Stack>
				{isCompleted && <Chip color='success' size='small' icon={<Done />} label='Finished' />}
				{isInProgress && <Chip color='warning' size='small' icon={<Sync />} label='In Progress' />}
				{!isCompleted && !isInProgress && !isLocked && <Chip size='small' icon={<Pending />} color='info' label='Pending' />}
				{isLocked && <Chip size='small' icon={<Lock />} color='error' label='Locked' />}
			</Stack>
			<Stack spacing={2}>
				{phase.tasks.map((task, taskIndex) => (<Task
					isLocked={isLocked}
					isNextPhaseInProgress={isNextPhaseInProgress}
					taskIndex={taskIndex}
					phaseIndex={index}
					key={task.title}
					task={task} />))}
			</Stack>
		</Stack>
	)
}