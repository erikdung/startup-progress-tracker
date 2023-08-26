export interface ITask {
	title: string
	done: boolean
}

export interface IPhase {
	title: string

	tasks: ITask[]
}