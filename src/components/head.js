import React from "react";

const Head = ({ images, setImages }) => {
  const filesChosen = images?.filter((image) => image.checked)?.length;

  const handleMasterCheckClick = () => {
    const shallowImages = [...images];
    if (filesChosen > 0) {
      const modifiedImages = shallowImages?.map((itm) => {
        return {
          ...itm,
          checked: false,
        };
      });
      setImages(modifiedImages);
    } else {
      const modifiedImages = shallowImages?.map((itm) => {
        return {
          ...itm,
          checked: true,
        };
      });
      setImages(modifiedImages);
    }
  };

  const handleDelete = () => {
    const shallowImages = [...images];
    const updatedImages = shallowImages?.filter((image) => !image.checked);
    setImages(updatedImages);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <input
            onClick={handleMasterCheckClick}
            className="checkbox"
            type="checkbox"
            checked={filesChosen > 0 && true}
          />
          <p className="ps-2">
            {filesChosen === 0 ? "No" : filesChosen} Files Selected
          </p>
        </div>
        <div>
          <p onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
            Delete Files
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
