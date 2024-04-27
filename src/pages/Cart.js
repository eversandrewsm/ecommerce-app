import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"} />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product image"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="title">KJHLHKJHBKJLD</h5>
                    <p className="color">jkghjhk</p>
                    <p className="size">klhjkj</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">R1049.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5>R1049.00</h5>
                </div>
                <div className="cart-col-4">
                  <RiDeleteBin6Line className="text-danger" />
                </div>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product image"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="title">KJHLHKJHBKJLD</h5>
                    <p className="color">jkghjhk</p>
                    <p className="size">klhjkj</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">R1049.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5>R1049.00</h5>
                </div>
                <div className="cart-col-4">
                  <RiDeleteBin6Line className="text-danger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
