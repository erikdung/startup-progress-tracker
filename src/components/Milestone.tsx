import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { deepPurple } from '@mui/material/colors'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {Done, Sync, Pending} from '@mui/icons-material'
import {toast} from 'react-toastify'

import { ITransformedMilestone } from '../types'
import Step from './Step'
import { getRandomFact } from '../remotes'

interface IProps {
	milestone: ITransformedMilestone
	index: number
}

export default function Milestone({ milestone, index }: IProps) {

	const [initialized, init] = React.useState(false)

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
		if (milestone.hasAllStepsFinished) {
			renderToast()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [milestone.hasAllStepsFinished])

	return (
		<Stack spacing={1}>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Avatar sx={{ bgcolor: deepPurple[300] }}>{index + 1}</Avatar>
					<Typography variant='h5'>{milestone.title}</Typography>
				</Stack>
				{milestone.hasAllStepsFinished && <Chip color='success' size='small' icon={<Done />} label='Finished' />}
				{milestone.hasSomeStepsFinished && <Chip color='warning' size='small' icon={<Sync />} label='In Progress' />}
				{!milestone.hasSomeStepsFinished && !milestone.hasAllStepsFinished && <Chip size='small' icon={<Pending />} color='info' label='Pending' />}
			</Stack>
			<Stack spacing={2}>
				{milestone.steps.map((step, stepIndex) => (<Step milestoneIndex={index} stepIndex={stepIndex} step={step} />))}
			</Stack>
		</Stack>
	)
}