import { IMilestone } from "./types"

export const DEFAULT_MILESTONES: IMilestone[] = [
	{
		title: 'Foundation',
		steps: [
			{title: 'Setup virtual office', done: false},
			{title: 'Set mission & vision', done: false},
			{title: 'Select business name', done: false},
			{title: 'Buy domains', done: false},
		],
	},
	{
		title: 'Discovery',
		steps: [
			{title: 'Create roadmap', done: false},
			{title: 'Competitor analysis', done: false},
		],
	},
	{
		title: 'Delivery',
		steps: [
			{title: 'Release marketing website', done: false},
			{title: 'Release MVP', done: false},
		],
	},
]

export const STORAGE_KEY = "OAKS_LABS_STORAGE_KEY"