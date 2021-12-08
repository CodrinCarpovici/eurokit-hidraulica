import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-wrapper">
        <div className="text-center">
          <div className="d-flex justify-content-center my-5">
            <h1 className="contact-header">Contact Us</h1>
          </div>
          <p>Please fill out the form below.</p>

          <span className="success-message"></span>
        </div>
        <div className="container">
          <form>
            <div className="row mb-1">
              <div className="col-lg-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                  <div className="line"></div>

                  {/* PHONE INPUT */}
                  <div className="text-center">
                    <input
                      id="text"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number (Optional)"
                      name="phone"
                    />
                    <div className="line"></div>
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="text-center">
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                    <div className="line"></div>
                  </div>

                  {/* SUBJECT INPUT */}
                  <div className="text-center">
                    <input
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                  <textarea
                    id="description"
                    input="text"
                    className="form-control"
                    placeholder="Please describe your query..."
                    name="description"
                  ></textarea>
                  <div className="line"></div>
                </div>

                <button
                  className="contact-btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
