import React from "react";
import "./brand.css";
import { dropbox, google, atlassian, shopify, slack } from "./imports";

const Brand = () => {
  return (
    <div className="section__padding brand">

      <div>
        <img src={google} alt='google' />
      </div>

      <div>
        <img src={atlassian} alt='atlassian' />
      </div>

      <div>
        <img src={dropbox} alt='dropbox' />
      </div>

      <div>
        <img src={shopify} alt='shopify' />
      </div>

      <div>
        <img src={slack} alt='slack' />
      </div>
    </div>
  );
};

export default Brand;
