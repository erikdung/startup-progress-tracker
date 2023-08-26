import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Tooltip from '@mui/material/Tooltip'

import { useMutateStep } from '../hooks'
import { ITransformedStep } from "../types"

interface IProps {
	step: ITransformedStep
	milestoneIndex: number
	stepIndex: number
}

export default function Step(props: IProps) {
	const { step, milestoneIndex, stepIndex } = props
	const { mutate } = useMutateStep(milestoneIndex, stepIndex)

	const tooltipContent = React.useMemo(() => {
		if (!step.previousStepFinished) {
			return 'Before checking this box, ensure that all previous steps have been successfully completed. This checkbox signifies the completion of a step, but keep in mind that it can only be marked as complete once all preceding steps have been fulfilled. Your progress is in your hands! 🚀'
		}
		if (step.nextStepFinished) {
			return 'Undoing this step will not only reverse its completion but also revert all subsequent finished steps back to their original state. Consider the implications carefully, as your action will ripple through the progress you\'ve made so far. Choose wisely! 🔄'
		}
		return null
	}, [step])

	if (!tooltipContent) {
		return <FormControlLabel control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} checked={step.done} onChange={() => mutate()} />} label={step.title} />
	}

	return (
		<Tooltip title={tooltipContent} arrow placement='bottom-start'>
			<FormControlLabel
				sx={{width: 'fit-content'}}
				control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} checked={step.done} onChange={() => mutate()} disabled={!step.previousStepFinished} />}
				label={step.title} />
		</Tooltip>

	)
}