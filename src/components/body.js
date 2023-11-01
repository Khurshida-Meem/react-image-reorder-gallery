import React from "react";
import { imageArr } from "../utils/imageArr";

const Body = () => {
  return (
    <div className="grid_container">
      {imageArr?.map((singleImg, index) =>(
        <div draggable className={`grid_item ${index ===0 && "grid_item_featured"}`} key={singleImg?.id}>
            <img src={singleImg?.img} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default Body;
