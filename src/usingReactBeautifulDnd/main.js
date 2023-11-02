import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { imageArr } from "../utils/imageArr";

// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   width: 250,
// });

// const getItemStyle = (isDragging, draggableStyle) => ({
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,
//   background: isDragging ? "lightgreen" : "grey",
//   ...draggableStyle,
// });

const Main = () => {
  const [images, setImages] = useState(imageArr);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      images,
      result.source.index,
      result.destination.index
    );

    setImages(items);
  };

  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="both">
          {(provided, snapshot) => (
            <div
              className="grid_container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {images.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className={`grid_item ${
                        index === 0 && "grid_item_featured"
                      }`}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      drag the div {item.id}
                      {/* hi */}
                      {/* <img src={item?.img} alt="" /> */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Main;
