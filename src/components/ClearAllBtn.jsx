import React from "react";

const ClearAllBtn = ({ clearAllHandle }) => {
  return (
    <button className="clearAllBtn" onClick={clearAllHandle}>
      ClearAll
    </button>
  );
};

export default ClearAllBtn;
