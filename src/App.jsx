import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Layout from './components/Layout/Layout';
import Theme from './Theme';
// import './App.css';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='about-us' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          {/* <Route path="*" element={<NoPage />} /> 404 page  */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;