import "./allProducts.scss";

// Assets
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

const AllProducts = () => {
  return (
    <div className="all-products">
      <div className="heading-card">
        <h1>All Products</h1>
      </div>
      <div className="products-list">
        {trendingProducts.map((item, index) => {
          return (
            <div className="product">
              <img src={item.image} alt="" />
              <div>
                <h5>{item.productName}</h5>
                <p>Price {item.price}.00 Rs/-</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
