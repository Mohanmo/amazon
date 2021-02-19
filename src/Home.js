import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-background"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB.__CB428684220_.jpg"
          alt=""
        />
        <div className="home-row">
          <Product
            title="Iphone 11Plus"
            image="https://images.hindustantimes.com/tech/img/2020/11/21/960x540/image_-_2020-11-20T131310.751_1605858191995_1605858197390_1605943285573.jpg"
            rating={3}
            price={299}
          />
          <Product
            title="Iphone 12Plus"
            image="https://images.hindustantimes.com/tech/img/2020/11/21/960x540/image_-_2020-11-20T131310.751_1605858191995_1605858197390_1605943285573.jpg"
            rating={3}
            price={499}
          />
        </div>

        <div className="home-row">
          <Product
            title="Iphone 11Plus"
            image="https://images.hindustantimes.com/tech/img/2020/11/21/960x540/image_-_2020-11-20T131310.751_1605858191995_1605858197390_1605943285573.jpg"
            rating={3}
            price={299}
          />
          <Product
            title="Iphone 12Plus"
            image="https://images.hindustantimes.com/tech/img/2020/11/21/960x540/image_-_2020-11-20T131310.751_1605858191995_1605858197390_1605943285573.jpg"
            rating={3}
            price={499}
          />
          <Product
            title="Iphone 11Plus"
            image="https://images.hindustantimes.com/tech/img/2020/11/21/960x540/image_-_2020-11-20T131310.751_1605858191995_1605858197390_1605943285573.jpg"
            rating={3}
            price={299}
          />
        </div>

        <div className="home-row"></div>
      </div>
    </div>
  );
}

export default Home;
