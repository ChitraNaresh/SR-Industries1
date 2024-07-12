import "./sectionOne.scss";

//Assets
import imageOne from "./assets/sectionOneImage1.jpg";

const SectionOne = () => {
  return (
    <>
      <div className="section-one">
        <div className="left-div">
          <img src={imageOne} alt="" />
        </div>
        <div className="right-div">
          <h1>Best House Plants For Your Home</h1>
          <p>
            Mauris cursus metus eget malesuada sagittis. Vivamus tincidunt, leo
            a faucibus pharetra, augue odio mattising ante, sed facilisis mi dui
            vitae orci.
          </p>
          <button>Discover</button>
        </div>
      </div>
      <div className="section-one">
        <div className="right-div">
          <h1>Best House Plants For Your Home</h1>
          <p>
            Mauris cursus metus eget malesuada sagittis. Vivamus tincidunt, leo
            a faucibus pharetra, augue odio mattising ante, sed facilisis mi dui
            vitae orci.
          </p>
          <button>Discover</button>
        </div>
        <div className="left-div">
          <img src={imageOne} alt="" />
        </div>
      </div>
      <div className="section-one">
        <div className="left-div">
          <img src={imageOne} alt="" />
        </div>
        <div className="right-div">
          <h1>Best House Plants For Your Home</h1>
          <p>
            Mauris cursus metus eget malesuada sagittis. Vivamus tincidunt, leo
            a faucibus pharetra, augue odio mattising ante, sed facilisis mi dui
            vitae orci.
          </p>
          <button>Discover</button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
