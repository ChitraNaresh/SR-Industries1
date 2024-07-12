import "./navbar.scss";

//Assets
import dropIcon from "../assets/down-arrow.png";

// Hooks
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     setScrollValue(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
  ];

  const mainCategories = [
    {
      name: "Dining",
      link: "/dining",
    },
    {
      name: "Living Room",
      link: "/living-room",
    },
    {
      name: "Bedroom",
      link: "/bedroom",
    },
    {
      name: "Decorative",
      link: "/decorative",
    },
  ];

  return (
    <div
      // className={`navbar-card ${
      //   scrollValue > 500 || scrollValue < 200
      //     ? "navbar-visible"
      //     : "navbar-hidden"
      // }`}
      className="navbar-card"
    >
      <div className="nav-bar">
        <div className="website-name">
          <h3>SR DECORS</h3>
          <h4>~ by SR INDUSTRIES</h4>
        </div>
        <nav className="nav-links">
          {navLinks.map((item, index) => {
            return (
              <NavLink
                activeClassName="active"
                to={item.link}
                key={index}
                className="link"
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="all-categories">
        {mainCategories.map((item, index) => {
          return (
            <button key={index}>
              {item.name} <span>v</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
