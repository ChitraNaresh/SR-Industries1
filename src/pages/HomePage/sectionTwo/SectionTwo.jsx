import "./sectionTwo.scss";

//Assets
import image1 from "../assets/section2Image1.jpg";

const products = [
  {
    image: image1,
    offerText: "50% Off",
    productName: "Indoor Plants Collection",
    price: 250,
  },
  {
    image: image1,
    offerText: "50% Off",
    productName: "Indoor Plants Collection",
    price: 250,
  },
];

const singleProduct = {
  image: image1,
  offerText: "50% Off",
  productName: "Indoor Plants Collection",
  price: 250,
};

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="left-card">
        {products.map((item, index) => {
          return (
            <div className="section-two-left-product">
              <img src={item.image} alt="" />
              <div>
                <p className="offer">{item.offerText}</p>
                <p className="name">{item.productName}</p>
                <p className="price">{item.price} Rs/-</p>
                <button>See More</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="right-card">
        <div className="section-two-right-product">
          <div>
            <p>{singleProduct.productName}</p>
            <button>See More</button>
          </div>
          <img src={singleProduct.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
