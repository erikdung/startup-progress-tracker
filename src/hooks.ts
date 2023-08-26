import { useQuery, useMutation, useQueryClient } from 'react-query'

import { getPhases, toggleTask } from './storage'

const queryKey = ['phases_key']

export const useGetPhases = () => useQuery(queryKey, getPhases)

export const useMutateTask = (phaseIndex: number, taskIndex: number) => {
	const queryClient = useQueryClient()
	return useMutation(() => toggleTask(phaseIndex, taskIndex), {
		onSuccess: () => {
			queryClient.invalidateQueries(queryKey)
		}
	})
}