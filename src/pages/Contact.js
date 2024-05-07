import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { MdAddCall, MdMarkEmailUnread } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.180749297542!2d28.064667658283387!3d-26.00752579875973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95718532631c7b%3A0x125781652658866b!2sBarbeque%20Downs%2C%20Midrand%2C%201684!5e0!3m2!1sen!2sza!4v1712528860027!5m2!1sen!2sza"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      className="w-100 form-control"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0 py-2 px-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15">
                      <FaHome className="fs-5" />
                      <address className="mb-0">
                        Barbeque Downs, Midrand, Gauteng, South Africa
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdAddCall className="fs-5" />
                      <a href="+27 6596820031">+27 659682031</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdMarkEmailUnread className="fs-5" />
                      <a href="mailto:info@integratech.co.za">
                        info@integratech.co.za
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsFillInfoCircleFill className="fs-5" />
                      <p className="mb-0">
                        Store Is Currently Available Online Only.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
