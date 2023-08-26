import { IPhase } from "./types"

export const DEFAULT_PHASES: IPhase[] = [
	{
		title: 'Foundation',
		tasks: [
			{title: 'Setup virtual office', done: false},
			{title: 'Set mission & vision', done: false},
			{title: 'Select business name', done: false},
			{title: 'Buy domains', done: false},
		],
	},
	{
		title: 'Discovery',
		tasks: [
			{title: 'Create roadmap', done: false},
			{title: 'Competitor analysis', done: false},
		],
	},
	{
		title: 'Delivery',
		tasks: [
			{title: 'Release marketing website', done: false},
			{title: 'Release MVP', done: false},
		],
	},
]

export const STORAGE_KEY = "STARTUP_PROGRESS_TRACKER_STORAGE_KEY"