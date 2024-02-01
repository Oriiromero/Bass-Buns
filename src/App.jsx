import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NavBar from './components/Navbar/Navbar';
// import Layout from './components/Layout/Layout';
import Theme from './Theme';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={Theme}>
      <NavBar />
      <AnimatePresence initial={false} mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> 404 page  */}
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App;