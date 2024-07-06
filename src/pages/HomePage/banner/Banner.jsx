import "./banner.scss";

// Hooks
import { useEffect, useState } from "react";

// Assets
import banner1 from "../assets/bannerImage1.jpg";
import banner2 from "../assets/bannerImage2.jpg";
import banner3 from "../assets/bannerImage3.jpg";
import banner4 from "../assets/bannerImage4.jpg";

const images = [banner1, banner2, banner3, banner4];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-card">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
      ))}
    </div>
  );
};

export default Banner;
