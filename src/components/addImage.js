import React, { useRef, useState } from "react";
import addImageThumb from "../assets/images/add_image.png";

const AddImage = () => {
  const [imageFile, setImageFile] = useState(null);

  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div onClick={onButtonClick} className="col-6 my-3">
      <input
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setImageFile(e.target.files?.[0]);
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
      {imageFile ? (
        <div className="d-flex align-items-center">
          <div
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#0072E5",
              cursor: "pointer",
            }}
          >
            <img
              alt="preview "
              src={URL.createObjectURL(imageFile)}
              height={70}
              width={100}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddImage;
