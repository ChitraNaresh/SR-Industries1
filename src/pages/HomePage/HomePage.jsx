import "./homePage.scss";

// Components
import Banner from "./banner/Banner";
import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";

// Trending Products
import trending1 from "../HomePage/assets/trending1.jpg";
import trending2 from "../HomePage/assets/trending2.jpg";
import trending3 from "../HomePage/assets/trending3.jpg";

import SingleProduct from "../singleProduct/SingleProduct";

const trendingProducts = [
  {
    image: trending3,
    productName: "Coasters",
    price: 1000,
  },
  {
    image: trending1,
    productName: "Coasters",
    price: 1000,
  },
  {
    image: trending1,
    productName: "Coasters",
    price: 1000,
  },
  {
    image: trending3,
    productName: "Coasters",
    price: 1000,
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <SectionOne />
      <div className="trending-products">
        <h2>Discover trending products!</h2>
        <div className="trending-products-list">
          {trendingProducts.map((item, index) => {
            return <SingleProduct key={index} item={item} />;
          })}
        </div>
      </div>
      <SectionTwo />
    </div>
  );
};

export default HomePage;
