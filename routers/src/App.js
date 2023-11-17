import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
