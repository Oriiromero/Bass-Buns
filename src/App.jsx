import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Layout from './components/Layout/Layout';
// import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path='menu' element={<Menu />}/>
        <Route path='about-us' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        {/* <Route path="*" element={<NoPage />} /> 404 page  */} 
      </Routes>
    </BrowserRouter>
  )
}

export default App;