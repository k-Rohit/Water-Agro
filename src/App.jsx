// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
// import ContactUs from './pages/ContactUs';
// import { AboutUs } from './pages/AboutUs';
// import LandingPage from './pages/LandingPage';
// import { ProductPage } from './pages/ProductPage'; //Imported ProductPage
// import Research from './pages/Research';  //Imported Research
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Place Navbar *outside* the Routes, so it's always visible */}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/products" element={<ProductPage />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/research" element={<Research />} />
//       </Routes>

//     </Router>
//   );
// }

// export default App;

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
          {/* <Route path="/contact-us" element={<WithNavbar Component={ContactUs} />} /> */}
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