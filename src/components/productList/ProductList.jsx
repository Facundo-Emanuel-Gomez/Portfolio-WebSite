import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { topics } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Crear y aprender</h1>
        <p className="pl-descrip">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quae
          nesciunt magni explicabo laborum veniam natus recusandae ducimus,
          dolore ullam quis eaque autem quaerat, eligendi debitis id quibusdam
          aliquid alias.
        </p>
      </div>
      <div className="pl-list">
        {topics.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
