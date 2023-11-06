import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const SingleImg = ({ id, img, checked, moveItem, index, handleChecked }) => {
  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop({
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
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: "GRID_ITEM",
    item: { id, img },
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  // remove existing element on hover with droppable element
  const opacity = isDragging ? 0 : 1;

  return (
    <div
    style={{cursor: "grab"}}
      className={`grid_item ${isOver && "border_on_hover "}`}
      ref={ref}
    >
      <div  className={` ${checked ? "_checked" : "color_overlay"}`}>
        <div>
          <input
            checked={checked}
            className="checkbox grid_item_checkbox"
            style={{ display: checked && "block" }}
            type="checkbox"
            onClick={() => handleChecked(id)}
          />
        </div>

        <img
          className={isOver && "slide"}
          style={{ opacity }}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleImg;
