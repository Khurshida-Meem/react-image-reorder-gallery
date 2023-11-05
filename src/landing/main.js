import React from "react";
import { useDrop } from "react-dnd";
import SingleImg from "./singleImg";
import addImage from "../assets/images/add_image.png";

const Main = ({ images, setImages }) => {
  const [, drop] = useDrop({
    accept: "GRID_ITEM",
  });

  const moveItem = (draggedId, hoverId) => {
    const updatedItems = [...images];
    // remove dragged item and insert it into new position
    const draggeItem = updatedItems.find((item) => item.id === draggedId);
    updatedItems.splice(updatedItems.indexOf(draggeItem), 1);
    updatedItems.splice(hoverId, 0, draggeItem);
    setImages(updatedItems);
  };

  const handleChecked = (id) => {
    const shallowImages = [...images];
    const updatedItems = shallowImages?.map((image) => {
      if (image?.id === id) {
        return {
          ...image,
          checked: !image.checked,
        };
      }
      return image;
    });
    setImages(updatedItems);
  };

  return (
    <div ref={drop} className="grid_container container">
      {images.map((item, index) => (
        <SingleImg
          handleChecked={handleChecked}
          key={item.id}
          {...item}
          moveItem={moveItem}
          index={index}
        />
      ))}
      <div className="grid_item">
        <img src={addImage} alt="" />
      </div>
    </div>
  );
};

export default Main;
