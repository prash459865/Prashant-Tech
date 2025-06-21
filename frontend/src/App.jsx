import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import ImagesSlider from './Components/ImagesSlider/ImagesSlider';
import Blog from './Components/Blog/Blog';
import Pages from './Components/Pages/Pages';
import Portfolio from './Components/Portfolio/Portfolio';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';
import ContactAndLocationContainers from './Components/ContactAndLocationContainers/ContactAndLocationContainers';

const App = () => {
  return (
   <BrowserRouter>
   <ContactAndLocationContainers/>
   <ImagesSlider/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/Pages" element={<Pages/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
