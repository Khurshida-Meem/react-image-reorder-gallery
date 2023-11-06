import React, { useRef } from "react";
import addImageThumb from "../assets/images/add_image.png";

const AddImage = ({ setImages, images }) => {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div onClick={onButtonClick}>
      <input
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setImages([
              ...images,
              {
                id: images.length +1 ,
                img: URL.createObjectURL(e.target.files?.[0]),
                checked: false,
              },
            ]);
          }
        }}
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div style={{ fontSize: "14px" }}>
        <img src={addImageThumb} alt="" />
      </div>
    </div>
  );
};

export default AddImage;
