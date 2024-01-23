import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
