import { useQuery, useMutation, useQueryClient } from 'react-query'

import { getMilestones, toggleStep } from './storage'

const queryKey = ['milestones_key']

export const useGetMilestones = () => useQuery(queryKey, getMilestones)

export const useMutateStep = (milestoneIndex: number, stepIndex: number) => {
	const queryClient = useQueryClient()
	return useMutation(() => toggleStep(milestoneIndex, stepIndex), {
		onSuccess: () => {
			queryClient.invalidateQueries(queryKey)
		}
	})
}