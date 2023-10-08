
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";


function App() {
  return (
  <>
  <Router>
  <Navbar />
  <switch>
  <Routes>
  <Route path='/home' element={<Home  />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path="/" element={<Navigate to="/home" />} />
</Routes>

  </switch>
  
  </Router>
  </>
  );
}

export default App;
