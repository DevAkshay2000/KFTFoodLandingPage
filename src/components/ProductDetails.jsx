import React from "react";
import couchImg from "../Assets/images/couch.png";
import Slider from "react-slick";

const ProductDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Product Name</h1>
                <p className="mb-4">
                  Where timeless tradition and modern innovation deliver
                  excellence in every dish
                </p>
              </div>
            </div>
            {/* Banner image */}
            {/* <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couchImg} className="img-fluid" alt="img couch" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <p style={{ fontSize: "1rem", width: "91%", marginTop: "2%" }}>
              Kolhapuri Masala, renowned for its spicy, tangy, and slightly
              sweet taste, is a cornerstone of Kolhapuri cuisine. Kolhapur's
              rich history, influenced by various cultures, has contributed to
              the unique flavor profile of this masala.
            </p>
            <h5 className="mt-lg-5 mt-sm-3">What is added to It?</h5>
            <p>
              Kolhapuri Masala typically includes a combination of red chili
              peppers, coriander, cumin, turmeric, fenugreek, cloves, cardamom,
              cinnamon, black pepper, and dry ginger.{" "}
            </p>
            <h5 className="mt-lg-5 mt-sm-3">
              Famous Dishes Made from Kolhapuri Masala:
            </h5>
            <p>
              Kolhapuri Masala is often used in a variety of dishes, but it is
              particularly known for its use in:
            </p>
            <ul>
              <li>Kolhapuri Chicken</li>
              <li>Kolhapuri Mutton</li>
              <li>Ideal for seasoning roasted vegetables</li>
            </ul>
          </div>
          {/* Product carsouel section */}
          <div className="col-lg-5">
            <Slider {...settings}>
              <div>
                <img src={couchImg} alt="" className="img-fluid" style={{marginTop: "100px"}}/>
              </div>
              <div>
                <img src={couchImg} alt="" className="img-fluid" style={{marginTop: "100px"}}/>
              </div>
              <div>
                <img src={couchImg} alt="" className="img-fluid" style={{marginTop: "100px"}}/>
              </div>
              <div>
                <img src={couchImg} alt="" className="img-fluid" style={{marginTop: "100px"}}/>
              </div>
            </Slider>
          </div>

          {/* Similar Products Section */}
          <div className="similar-products mt-lg-5">
            <h3>Similar Products</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="product-card">
                  <img
                    src="/path/to/other-spice-1.png"
                    className="img-fluid"
                    alt="Other Spice 1"
                  />
                  <h5>Other Spice 1</h5>
                  <p>Short description of this spice</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-card">
                  <img
                    src="/path/to/other-spice-2.png"
                    className="img-fluid"
                    alt="Other Spice 2"
                  />
                  <h5>Other Spice 2</h5>
                  <p>Short description of this spice</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-card">
                  <img
                    src="/path/to/other-spice-3.png"
                    className="img-fluid"
                    alt="Other Spice 3"
                  />
                  <h5>Other Spice 3</h5>
                  <p>Short description of this spice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
