import couchImg from "../Assets/images/couch.png";
import product1 from "../Assets/images/product-1.png";
import crossImg from "../Assets/images/cross.svg";
import product2 from "../Assets/images/product-2.png";
import product3 from "../Assets/images/product-3.png";
import flavour from "../Assets/icons/flavour.png";
import premium from "../Assets/icons/premium.png"
import boxImg from "../Assets/icons/box.png";
import productRange from "../Assets/icons/product-range.png";
import chooseUsImg from "../Assets/images/why-choose-us-img.jpg";
import imgGrid1 from "../Assets/images/img-grid-1.jpg";
import imgGrid2 from "../Assets/images/img-grid-2.jpg";
import imgGrid3 from "../Assets/images/img-grid-3.jpg";
import productImg1 from "../Assets/images/product-1.png";
import productImg2 from "../Assets/images/product-2.png";
import productImg3 from "../Assets/images/product-3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Timeless flavors Endless<span clsas="d-block"> love!</span>
                </h1>
                <p className="mb-4">
                  Where timeless tradition and modern innovation deliver
                  excellence in every dish
                </p>
                <p>
                  <Link className="btn btn-secondary me-2" to="/contact-us">
                    Shop Now
                  </Link>
                  <Link className="btn btn-white-outline" to="/products">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couchImg} className="img-fluid" alt="img couch" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* <!-- Start Column 1 --> */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafting quality food with passion, Nurturing health with every
                bite!
              </h2>
              <p className="mb-4">
                KFT Foods as the newest venture of Nigade Family opens a new
                door to the authentic flavors of Kolhapur with an unwavering
                dedication to tradition and quality.
              </p>
              <p>
                <Link className="btn" to="/about-kft-foods">
                  Know More
                </Link>
              </p>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src={product1}
                  className="img-fluid product-thumbnail"
                  alt="Error while loading"
                />
                <h3 className="product-title">Product 1</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img
                    src={crossImg}
                    className="img-fluid"
                    alt="Error while loading"
                  />
                </span>
              </a>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src={product2}
                  className="img-fluid product-thumbnail"
                  alt="Error while loading"
                />
                <h3 className="product-title">Product 2</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img
                    src={crossImg}
                    className="img-fluid"
                    alt="Error while loading"
                  />
                </span>
              </a>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src={product3}
                  className="img-fluid product-thumbnail"
                  alt="Error while loading"
                />
                <h3 className="product-title">Product 3</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img
                    src={crossImg}
                    className="img-fluid"
                    alt="Error while loading"
                  />
                </span>
              </a>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>

      {/* <!-- Start Why Choose Us Section --> */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why KFT Food..?</h2>
              <p>
                At KFT Foods, we’re excited to share the true essence of
                Kolhapur with the world, one exquisite product at a time.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={flavour} alt="Image7" className="img-fluid" />
                    </div>
                    <h3>Authentic Kolhapuri Flavors</h3>
                    <p style={{ textAlign: "justify" }}>
                      KFT Foods delivers genuine Kolhapuri cuisine and products,
                      blending high-quality ingredients with traditional recipes
                      to provide delicious, authentic flavors.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={premium} alt="Image8" className="img-fluid" />
                    </div>
                    <h3>Premium Quality</h3>
                    <p style={{ textAlign: "justify" }}>
                      We emphasize top-notch ingredients and rigorous quality
                      checks, ensuring our products meet the highest standards
                      of flavor and consistency.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={boxImg}
                        alt="Image9"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Hygienic Packaging</h3>
                    <p style={{ textAlign: "justify" }}>
                      Our products are packaged with the utmost hygiene to
                      guarantee freshness and safety, maintaining premium
                      quality while upholding the highest cleanliness standards.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={productRange}
                        alt="Image10"
                        className="img-fluid"
                      />
                    </div>
                    <h3>Diverse Product Range</h3>
                    <p style={{ textAlign: "justify" }}>
                      We offer a broad selection of products, from classic
                      spices and masalas to unique items like bamboo salt,
                      ensuring there's something to suit every taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src={chooseUsImg}
                  alt="why to choose img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start We Help Section --> */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={imgGrid1} alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src={imgGrid2} alt="Untree.co2" />
                </div>
                <div className="grid grid-3">
                  <img src={imgGrid3} alt="Untree.co3" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h4 className="section-title mb-4" style={{ lineHeight: "2rem" }}>
                We offer a broad selection of products, from classic spices and
                masalas to unique items like bamboo salt, ensuring there’s
                something to suit every taste.
              </h4>
              <p style={{ textAlign: "justify", lineHeight: "2rem" }}>
                Our products range from classic Kolhapuri masalas, cherished
                through generations, to a variety of health products. We take
                pride in using the finest ingredients, sourced directly from our
                family farm, and blending them with innovative techniques. This
                dedication ensures that every product is not only delicious but
                also nutritious and sustainable.
              </p>

              <p>
                <Link className="btn mt-4" to="/products">
                  Explore
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End We Help Section --> */}

      {/* <!-- Start Popular Product --> */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={productImg1} alt="Image2" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Product 4</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#2">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={productImg2} alt="Image3" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Product 5</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#3">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={productImg3} alt="Image5" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Product 6</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#5">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular Product --> */}
    </>
  );
}
export default Home;
