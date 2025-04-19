import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import { AboutUs } from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import { ProductPage } from './pages/ProductPage';
import Research from './pages/Research';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingWithNoNavbar />} />
          <Route path="/products" element={<WithNavbar Component={ProductPage} />} />
          <Route path="/about-us" element={<WithNavbar Component={AboutUs} />} />
          <Route path="/contact-us" element={<ContactWithNoNavbar />} />
          <Route path="/research" element={<WithNavbar Component={Research} />} />
        </Routes>
    </Router>
  );
}


function WithNavbar({ Component }) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

function LandingWithNoNavbar() {
    return (
      <>
        <LandingPage />
      </>
    );
}
function ContactWithNoNavbar() {
  return (
    <>
      <ContactUs />
    </>
  );
}


export default App;