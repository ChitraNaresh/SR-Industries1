import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";

// Components
import Navbar from "./component/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllProducts from "./pages/allProducts/AllProducts";
import AboutComponent from "./pages/aboutComponent/AboutComponent";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./component/footer/Footer";

//Assets
import whatsapp from "./assets/whatsapp (1).png";
import gmail from "./assets/gmail.png";

const socialMediaLinks = [whatsapp, gmail];

const App = () => {
  return (
    <div>
      <div className="social-media-links">
        <div>
          <a href="https://wa.me/919550973572" target="_blank">
            <img src={whatsapp} />
            WhatsApp
          </a>
        </div>
        <div>
          <a
            href="mailto:182g1a0314@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
            target="_blank"
          >
            <img src={gmail} alt="" />
            Gmail
          </a>
        </div>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutComponent />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
