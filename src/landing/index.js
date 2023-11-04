import React from "react";
import Main from "./main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Head from "../components/head";

const AwesomeGallery = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Head />
      <Main />
    </DndProvider>
  );
};

export default AwesomeGallery;
