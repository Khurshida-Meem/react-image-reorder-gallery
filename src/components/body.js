import React, { useState } from "react";
import { imageArr } from "../utils/imageArr";

const Body = () => {
  const [images, setImages] = useState(imageArr);

  const [hoveredId, setHoveredId] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e, index) => {
    // const fromIndex = e.dataTransfer.getData("index");
    e.preventDefault();
    console.log(e);
    // const fromIndex = e.dataTransfer.getData("index");
    // const updatedImages = [...images];
    // const [draggedImage] = updatedImages.splice(fromIndex, 1);
    // updatedImages.splice(index, 0, draggedImage);
    // setImages(updatedImages);
  };

  const handleDrop = (e, toIndex) => {
    e.preventDefault();
    console.log(e);

    const fromIndex = e.dataTransfer.getData("index");
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  const handleDragEnter = (e, toIndex) => {
    e.preventDefault();

    const fromIndex = e.dataTransfer.getData("index");
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  return (
    <div className="grid_container">
      {images?.map((singleImg, index) => (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          className={`grid_item ${index === 0 && "grid_item_featured"}`}
          key={singleImg?.id}
        >
          Hi there {singleImg.id}
          {/* <img src={singleImg?.img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Body;
