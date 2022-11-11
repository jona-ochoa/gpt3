import React from "react";
import './blog.css'
import { image1, image2, image3, image4, image } from "./imports";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="container">
        <div className="container-groupA">
          <Article imgUrl={image} date='Nov 11, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>

        <div className="container-groupB">
          <Article imgUrl={image1} date='Nov 11, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={image3} date='Nov 11, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={image2} date='Nov 11, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={image4} date='Nov 11, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
