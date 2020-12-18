import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
        />

        <div className="home-row">
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            title="The Laws of Human Nature"
            price="19.99"
            rating="⭐⭐⭐⭐⭐"
            imgURL="https://m.media-amazon.com/images/I/41CMC4k3Y6L._AC_SY400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
