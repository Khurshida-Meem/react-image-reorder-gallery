import React, { useMemo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

const SingleImg = ({ id, moveCard, index, image }) => {
  const ref = useRef(null);
  const [{ isDragging, handlerId }, connectDrag] = useDrag({
    type: "card",
    item: { id },
    collect: (monitor) => {
      const result = {
        handlerId: monitor.getHandlerId(),
        isDragging: monitor.isDragging(),
      };
      return result;
    },
  });
  const [, connectDrop] = useDrop({
    accept: "card",
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        moveCard(draggedId, id);
      }
    },
  });
  connectDrag(ref);
  connectDrop(ref);
  const opacity = isDragging ? 0 : 1;
  const containerStyle = useMemo(() => ({ ...style, opacity }), [opacity]);

  return (
    <div
      ref={ref}
      style={{
        ...containerStyle,
        gridColumn: index === 0 ? "span 2" : "",
        gridRow: index === 0 ? "span 2" : "",
      }}
      data-handler-id={handlerId}
    >
      <img src={image} alt="" />
    </div>
  );
};

export default SingleImg;
