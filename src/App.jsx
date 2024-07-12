import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";

// Components
import Navbar from "./component/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllProducts from "./pages/allProducts/AllProducts";
import AboutComponent from "./pages/aboutComponent/AboutComponent";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutComponent />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
