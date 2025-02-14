import React from "react";

const KeyItem = ({ keyBtn, keyClickHandler, isCapsActive }) => {
  let isCapsBtn = false;
  if (keyBtn === "Caps") {
    isCapsBtn = true;
  }

  return (
    <button
      className={` ${isCapsBtn === true && "CapsBtnStyle"}
        ${isCapsActive === true && "Caps-on"}
      keyStyle`}
      type="button"
      value={keyBtn}
      onClick={keyClickHandler}
    >
      {keyBtn}
    </button>
  );
};

export default KeyItem;
