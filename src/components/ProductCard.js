import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wishlist.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="title">Kids headphones bulk 10 oack multi colored</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
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
      </div>
    </div>
  );
};

export default ProductCard;
