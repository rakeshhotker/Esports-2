import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Navbar from "./Components/Navbar"
import News from "./Components/News";
import Events from "./Components/Events";
import "./Components/style.css"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Events/>
    <News/>
    <Login/>
    <Contact/>
    </div>
  );
}
export default App;
