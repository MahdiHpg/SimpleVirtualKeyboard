import React from "react";

const TypedKeys = ({ typedTexts }) => {
  return (
    <textarea
      className="typedKeys"
      type="text"
      value={typedTexts}
      placeholder="Type Anything with My Virtual Keyboard..."
      readOnly
    />
  );
};

export default TypedKeys;
