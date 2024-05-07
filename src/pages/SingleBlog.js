import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title={"Dynamic Blog Name"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12"></div>
          <div className="single-blog-card">
            <Link to="/blogs" className="d-flex align-items-center gap-10">
              <BsArrowLeft className="fs-4" />
              Go Back to Blogs
            </Link>
            <h3>A Beautiful Sunday Morning renaissance</h3>
            <img src={blog - 1} className="img-fluid w-100 my-4" alt="blog" />
            <p>
              You're only as good as your last collection, which is an enormous
              pressure. I think there is something about luxury -it's not
              something people need, but it is what they want. It really pulls
              at their heart. I have a fantastic relationship with money.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
