import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const SingleImg = ({ id, img, checked, moveItem, index, handleChecked }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "GRID_ITEM",
    drop: (draggedItem) => {
      const draggedId = draggedItem.id;
      if (draggedId !== index) {
        moveItem(draggedId, index);
      }
    },
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        moveItem(draggedId, index);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "GRID_ITEM",
    item: { id, img },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  const opacity = isDragging ? 0.4 : 1;

  

  return (
    <div
      className="grid_item "
      ref={ref}
      style={{
        opacity,
      }}
    >
      <div className={checked ? "_checked" : "color_overlay"}>
        <input
          checked={checked}
          className="checkbox grid_item_checkbox"
          style={{display: checked && "block"}}
          type="checkbox"
          onClick={() => handleChecked(id)}
        />
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SingleImg;
