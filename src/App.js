import Home from './Components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			{/* ADD NAVBAR WHEN ITS DONE !!! */}
			<Router>
			<Home />
			</Router>
		</div>
	);
}
export default App;
