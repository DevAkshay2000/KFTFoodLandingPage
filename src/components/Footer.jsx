import FooterLogo from "../Assets/images/kft_logo.png";
import softSvg from "../Assets/images/sofa.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container relative">
          {/* <div className="sofa-img">
            <img src={softSvg} alt="soft Image12" className="img-fluid" />
          </div> */}

          <div className="row g-5 mb-5">
            <div className="col-lg-5">
              <div class="mb-4 footer-logo-wrap">
                <a href="/" class="footer-logo">
                  KFT FOODS
                </a>
              </div>
              <p className="mb-4" style={{ textAlign: "justify", width: "90%" }}>
                From flavorful Kolhapuri masalas to a variety of
                health-conscious products, KFT Foods offer a taste of India
                that's truly irreplaceable. Join the KFT Foods community and
                savor the authentic flavors that have captivated generations.
                Come experience the passion and quality that sets us apart.
              </p>
              <ul className="list-unstyled custom-social">
                <li>
                  <a
                    href="https://www.facebook.com/people/KFTFoods/61562217594973/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kft_foods/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+918080613965?text=Hi,%20I%20want%20to%20know%20about%20KFT%20products"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fa fa-whatsapp"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <div class="mb-4 footer-logo-wrap">
                <a href="#" class="footer-logo">
                  Links
                </a>
              </div>
              <div className="row links-wrap">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/about-kft-foods">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div class="mb-4 footer-logo-wrap">
                <a href="#" class="footer-logo">
                  Find Us
                </a>
              </div>
              <div className="">
                <iframe
                  width="100%"
                  height="300"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=KFTFoods,%20Aegis%20Auto%20Gas,%201K1,%20NH4,%20Sarnobatwadi,%20Kolhapur,%20Maharashtra%20416004%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>{" "}
                <a href="#">.</a>{" "}
                <script
                  type="text/javascript"
                  src="https://embedmaps.com/google-maps-authorization/script.js?id=51d88843cab671208b74bd765f250b84d651aae8"
                ></script>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  {new Date().getFullYear()} KFT Foods. All Rights Reserved.
                  {/* &mdash; Designed Developed by{" "}
                  <a href="https://untree.co">Untree.co</a>  */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
