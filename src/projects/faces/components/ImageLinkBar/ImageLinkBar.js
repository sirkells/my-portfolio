import React from "react";
import "./ImageLinkBar.css";

const ImageLinkBar = ({ onImageUrlChange, onButtonClick }) => {
  return (
    <div>
      <p className="f3">
        {"Smart Brain will detect faces in any of your pictures"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onImageUrlChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-black"
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkBar;
