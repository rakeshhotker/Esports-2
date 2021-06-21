import Home from './Components/Home';
import Login from './Components/Login';
// import Navbar from './Components/Navbar';
import News from './Components/News';
import Events from './Components/Events';
import './Components/style.css';

function App() {
  return (
    <div className="App">
    {/* ADD NAVBAR WHEN ITS DONE !!! */}
    {/* <Navbar/> */}
    <Home/>
    <Events/>
    <News/>
    <Login/>
    </div>
  );
}
export default App;
