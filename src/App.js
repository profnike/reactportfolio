import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
