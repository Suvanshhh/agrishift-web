import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import ContactPage from "./Pages/Contact/contact";
import ProfilePage from "./Pages/Profile/Profile"; // Dynamic profile page
import CropRecommendationPage from "./Pages/CropRecomPage/CropRecommendationPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile/:name" element={<ProfilePage />} /> {/* Dynamic Profile Route */}
        <Route path="/crop-recommendation" element={<CropRecommendationPage />} /> {/* Use the page */}
      </Routes>
    </Router>
  );
}

export default App;
