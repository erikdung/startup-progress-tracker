import Typography from '@mui/material/Typography'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'

import MilestonesList from './components/MilestonesList'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="container">
				<Typography variant='h4'>My startup progress</Typography>
				<MilestonesList />
			</div>
			<ToastContainer />
		</QueryClientProvider>
	)
}

export default App
