import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Projects" element={<Projects/>}/>
      <Route exact path="/Skills" element={<Skills/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
