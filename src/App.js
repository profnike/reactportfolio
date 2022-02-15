import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
