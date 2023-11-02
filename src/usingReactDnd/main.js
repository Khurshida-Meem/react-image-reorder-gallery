import React, { useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { imageArr } from "../utils/imageArr";
import SingleImg from "./singleImg";

const style = {
  width: 400,
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(200px, 1fr))",
};

const Main = () => {
  const [images, setImages] = useState(imageArr);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="text_class" style={style}>
          {images.map((image, index) => (
            <SingleImg
              key={image.id}
              id={image.id}
              text={image.text}
              moveCard={this.moveCard}
              index={index}
            />
          ))}
        </div>
      </DndProvider>
    </>
  );
};

export default Main;
