import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title={"Forgot Password"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2 mt-2 text-danger">
                "We will send a reset link to your email address."
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="mt-3 d-flex flex-column gap-15 justify-align-content-center align-items-center">
                    <button className="button py-2 px-3" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
