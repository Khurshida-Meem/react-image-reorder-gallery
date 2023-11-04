import React, { useState } from "react";
import Main from "./main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Head from "../components/head";
import { imageArr } from "../utils/imageArr";

const AwesomeGallery = () => {
  const [images, setImages] = useState(imageArr);

  return (
    <DndProvider backend={HTML5Backend}>
      <Head images={images} setImages={setImages} />
      <hr />
      <Main images={images} setImages={setImages} />
    </DndProvider>
  );
};

export default AwesomeGallery;
