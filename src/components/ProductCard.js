import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img
                src="images/wishlist.png"
                alt="wishlist"
                style={{ width: "18px", height: "18px" }}
              />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img src="images/watch-1.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="title">
              Kids headphones bulk 10 pack multi colored
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Description Bowers & Wilkins Px7 S2 Px7 S2’s custom-designed 40mm
              drive units and 24-bit-capable wireless platform combine for a
              truly immersive listening experience that allows you to hear more
              of what the artist wants you to hear. Hear what your music
              really...
            </p>
            <p className="price">R1049.95</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img
                src="images/wishlist.png"
                alt="wishlist"
                style={{ width: "18px", height: "18px" }}
              />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img src="images/watch-1.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="title">
              Kids headphones bulk 10 oack multi colored
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Description Bowers & Wilkins Px7 S2 Px7 S2’s custom-designed 40mm
              drive units and 24-bit-capable wireless platform combine for a
              truly immersive listening experience that allows you to hear more
              of what the artist wants you to hear. Hear what your music
              really...
            </p>
            <p className="price">R1049.95</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
