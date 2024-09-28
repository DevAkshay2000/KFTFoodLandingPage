import couchImg from "../Assets/images/couch.png";
import chooseUsImg from "../Assets/images/why-choose-us-img.jpg";
import Slider from "react-slick";
import flavour from "../Assets/icons/flavour.png";
import premium from "../Assets/icons/premium.png";
import boxImg from "../Assets/icons/box.png";
import productRange from "../Assets/icons/product-range.png";

function About() {
  const testimonials = [
    {
      id: 1,
      name: "Prajakta Sutar",
      text: "I recently discovered KFT Foods, and their bamboo salt has been a game changer for me. The mineral-rich salt has totally enhanced the flavors in my cooking. KFT Foods puts a lot of care into their products, and I’m thrilled to have found such a high-quality Kolhapuri brand!",
      company: "Pune",
    },
    {
      id: 2,
      name: "Rohan Patil",
      text: "I’ve been enjoying KFT Foods jaggery for a while now, and it’s made a noticeable difference in my chai and desserts. I'm loving it! I’ve also used their masalas in a few dishes, and they’ve added a Kolhapuri touch to my cooking, which was missing for so long. The quality is fantastic, and the packaging keeps everything fresh. I’m definitely a fan!",
      company: "Mumbai",
    },
    {
      id: 3,
      name: "Sanyukta Thorat",
      text: "Wow, KFT Food's masalas are amazing! Each blend I’ve tried has brought a rich, authentic flavor to my curries. The freshness and quality are evident with every use. KFT Foods' products are top-notch, and I love the combination of traditional ingredients with modern packaging.",
      company: "Udaipur",
    },
    {
      id: 4,
      name: "Nikhil Mayekar ",
      text: "I’ve been using KFT Food's Kolhapuri masalas, and they’ve transformed my home cooking. The flavors are so authentic, and they make a huge difference. I grew up in Kolhapur and shifted to Bangalore for my job but always missed the Kolhapuri taste. Now I don't have to worry! I’m looking forward to trying their bamboo salt and jaggery soon.",
      company: "Bangalore",
    },
    {
      id: 5,
      name: "Rohan Khanna",
      text: "KFT Food's Kolhapuri masalas are fantastic! I’ve tried several different masalas, and each one has added incredible depth and authenticity to my dishes. The packaging is also very well done; I’m definitely planning to explore other products from the brand. I have finally found authentic Kolhapuri taste through KFT Foods.",
      company: "Chattisgarh",
    },
  ];

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
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Who we are..??</h1>
                <p className="mb-4">
                  Made in Kolhapur for people who love authentic flavors
                </p>
                {/* <p>
                  <a href="" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p> */}
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

      <div className="about-us-container">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mx-auto ">
              <p>
                Based in the heart of Kolhapur, we at <strong>KFT Foods</strong>{" "}
                are dedicated to bringing the rich flavors and traditions of our
                region right to your kitchen.
              </p>
              <p>
                Established by the <strong>Nigade family</strong>, KFT Foods is
                a passion project that aims to blend time-honored traditions
                with innovative methods, delivering unparalleled quality and
                authentic flavor in every product. While we cherish the
                traditions of Kolhapur, we are also committed to innovation.{" "}
                KFT Foods is constantly exploring new ways to
                enhance our products and introduce exciting new products to the
                market with modern packaging techniques to keep our products
                fresh and flavorful.
              </p>
            </div>
            <div className="col-lg-6 mx-auto text-center">
              <img
                src="/path/to/your/image.jpg"
                alt="KFT Foods Img"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mx-auto text-center">
              <img
                src="/path/to/your/image.jpg"
                alt="KFT Foods Img2"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="col-lg-6 mx-auto ">
              <p>
                <b>KFT Foods</b> takes pride in being the authentic spice brand of
                Kolhapur. We are dedicated to bringing you the timeless flavors
                of Kolhapur through every product we offer. Curated with care
                and deep respect for our Kolhapuri culinary heritage, our
                products are designed to make your meals more enjoyable and
                authentically flavored.
              </p>
              <p>
                At KFT Foods, we specialize in crafting a variety of traditional
                and health-conscious food items. Our <b>Kolhapuri Masala</b> is a bold
                blend of dried red chilies, coriander seeds, and cumin, adding a
                fiery kick to your curries and marinades. For an extra burst of
                heat and color, our <b>Kolhapuri Chilli Powder</b> is perfect for
                spicing up any dish. Our <b>Bamboo Salt</b> is a unique seasoning,
                roasted in bamboo to offer an earthy flavor and essential
                minerals, making it a healthier choice. Sweeten your recipes
                naturally with our <b>Jaggery Powder</b>, which provides a rich,
                caramel-like taste while preserving valuable nutrients. <b>Kala
                Masala</b> adds a smoky depth to your meals, and our <b>Chai Masala</b>&nbsp; 
                transforms your tea time with a warm, aromatic blend of
                cardamom, cinnamon, ginger, and cloves.
              </p>
              <p>
                With KFT Foods taste the love and tradition in every bite, and
                let us help you bring a touch of Kolhapur’s rich culinary legacy
                and wellness products into your home.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Start Why Choose Us Section --> */}
      {/* <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why to choose us..?</h2>
              <p>
                At KFT Foods, we’re excited to share the true essence of
                Kolhapur with the world, one exquisite product at a time.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={flavour} alt="Image7" className="imf-fluid" />
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
                      <img
                        src={premium}
                        alt="Image9"
                        className="imf-fluid"
                      />
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
                      <img src={boxImg} alt="Image8" className="imf-fluid" />
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
                        className="imf-fluid"
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
      </div> */}
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start Testimonials Section --> */}
      <div className="testimonial-section">
        <h2>What Our Customers Say..?</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">
                - {testimonial.name},{" "}
                <span className="testimonial-company">
                  {testimonial.company}
                </span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default About;
