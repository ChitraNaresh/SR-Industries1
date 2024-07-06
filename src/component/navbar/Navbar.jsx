import "./navbar.scss";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Products",
      link: "/all-products",
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
    <>
      <div className="nav-bar">
        <div className="website-name">
          <h3>SR DECORS</h3>
          <h4>~ by SR INDUSTRIES</h4>
        </div>
        <nav className="nav-links">
          {navLinks.map((item, index) => {
            return <span key={index}>{item.name}</span>;
          })}
        </nav>
      </div>
      <div className="all-categories">
        {mainCategories.map((item, index) => {
          return <button key={index}>{item.name}</button>;
        })}
      </div>
    </>
  );
};

export default Navbar;
