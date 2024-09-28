import couchImg from "../Assets/images/couch.png";
import React from "react";
import { Formik } from "formik";
import Swal from 'sweetalert2'

function Contact() {
  
  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Get In <br /> <span className="d-block">Touch With Us</span>
                </h1>
                <p className="mb-4">
                  Reach out to us anytime, KFT foods is happy to help
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

      {/* <!-- Start Contact Form --> */}
      <div className="untree_co-section">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 pb-4">
                <div className="row mb-5">
                  {/* Contact details */}
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        {/* Location icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      <div className="service-contents">
                        <p>
                          1K1 NH4 HighWay, Sarnobatwadi, Kolhapur.
                          Maharashtra.41600
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Email details */}
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        {/* Email icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                      </div>
                      <div className="service-contents">
                        <p>customercare@kftfoods.in</p>
                      </div>
                    </div>
                  </div>
                  {/* Phone details */}
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        {/* Phone icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                      </div>
                      <div className="service-contents">
                        <p>+91 80806 13965</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Formik form */}
                <Formik
                  initialValues={{
                    fname: "",
                    lname: "",
                    email: "",
                    mobile: "",
                    msg: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Email is required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if(!values.fname){
                      errors.fname = "First name required";
                    }
                    if(!values.lname){
                      errors.lname = "Last name required";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   setSubmitting(false);
                    // }, 400);
                    Swal.fire({
                      title: "Succeed!",
                      text: "Our team will get back to you soon..!",
                      icon: "success"
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label className="text-black" htmlFor="fname">
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              name="fname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fname}
                            />
                            {errors.fname && touched.fname && (
                              <div className="text-danger">{errors.fname}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label className="text-black" htmlFor="lname">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lname"
                              name="lname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lname}
                            />
                            {errors.lname && touched.lname && (
                              <div className="text-danger">{errors.lname}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label className="text-black" htmlFor="email">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            {errors.email && touched.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label className="text-black" htmlFor="mobile">
                              Contact Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="mobile"
                              name="mobile"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mobile}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-5">
                        <label className="text-black" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          name="msg"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.msg}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary-hover-outline"
                        disabled={isSubmitting}
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Form --> */}
    </>
  );
}

export default Contact;
