import "./singleProduct.scss";

const SingleProduct = ({ item }) => {
  return (
    <div className="single-product">
      <div className="product-about">
        <img src={item.image} alt="" />
        <div>
          <h5>{item.productName}</h5>
          <p>{item.price} Rs/-</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
