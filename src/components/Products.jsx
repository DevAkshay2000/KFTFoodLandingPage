import { Link } from "react-router-dom";
import couchImg from "../Assets/images/couch.png";
import crossSvg from "../Assets/images/cross.svg";

function Products() {
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="text-white">What we offer..?</h1>
                <p className="mb-4">
                  The heartbeat of authentic Kolhapuri recipes..
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
      {/* <!-- End Hero Section --> */}

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* <!-- Start Column 1 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/product-details">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="img1"
                />
                <h3 className="product-title">Product 1</h3>
                <strong className="product-price">₹ 250/-</strong>

                <span className="icon-cross">
                  <img src={crossSvg} className="img-fluid" alt="img1" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/product-details">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="img1"
                />
                <h3 className="product-title">Product 2</h3>
                <strong className="product-price">₹ 250/-</strong>

                <span className="icon-cross">
                  <img src={crossSvg} className="img-fluid" alt="img1" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/product-details">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="img1"
                />
                <h3 className="product-title">Product 3</h3>
                <strong className="product-price">₹ 250/-</strong>

                <span className="icon-cross">
                  <img src={crossSvg} className="img-fluid" alt="img1" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/product-details">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                  alt="img1"
                />
                <h3 className="product-title">Product 4</h3>
                <strong className="product-price">₹ 250/-</strong>

                <span className="icon-cross">
                  <img src={crossSvg} className="img-fluid" alt="img1" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
