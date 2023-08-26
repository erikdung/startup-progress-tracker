export interface IStep {
	title: string
	done: boolean
}

export interface IMilestone {
	title: string

	steps: IStep[]
}

export interface ITransformedStep extends IStep {
	previousStepFinished: boolean
	nextStepFinished: boolean
}

export interface ITransformedMilestone extends IMilestone {
	hasAllStepsFinished: boolean
	hasSomeStepsFinished: boolean
	steps: ITransformedStep[]
}