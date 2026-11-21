import { useEffect } from 'react'
import Portfolio from './versions/Portfolio'

function App() {
	useEffect(() => {
		const url = new URL(window.location.href)

		if (url.searchParams.has('v')) {
			url.searchParams.delete('v')
			window.history.replaceState({}, '', url)
		}
	}, [])

	return <Portfolio />
}

export default App
