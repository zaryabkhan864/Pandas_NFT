
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import './fonts/Gotham-Font/GothamLight.ttf'
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Utilities from './components/Utilities';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/utilities' element={<Utilities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
