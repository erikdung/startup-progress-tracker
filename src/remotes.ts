import axios from 'axios'

const EP = 'https://uselessfacts.jsph.pl/api/v2/facts/random'

export const getRandomFact = async () => {
	const response = await axios.get<{id: string, text: string, source: string, sourceUrl: string}>(EP)
	return response.data
}
