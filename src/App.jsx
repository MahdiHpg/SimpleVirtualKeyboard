import { useState } from "react";
import "./App.css";
import TypedKeys from "./components/TypedKeys";
import dataKeys from "./common/keyboards.json";
import KeyItem from "./components/KeyItem";
import ClearAllBtn from "./components/ClearAllBtn";

function App() {
  const [typedTexts, setTypedTexts] = useState("");
  const [isCapsActive, setIsCapsActive] = useState(false);
  const [firstRow, setFirstRow] = useState(dataKeys.keyboard[0]);
  const [secondRow, setSecondRow] = useState(dataKeys.keyboard[1]);
  const [thirdRow, setThirdRow] = useState(dataKeys.keyboard[2]);
  const [fourthRow, setFourthRow] = useState(dataKeys.keyboard[3]);
  const [fifthRow, setFifthRow] = useState(dataKeys.keyboard[4]);

  const keyClickHandler = (e) => {
    switch (e.target.value) {
      case "backspace":
        setTypedTexts((prevText) => prevText.slice(0, -1));
        break;
      case "Enter":
        setTypedTexts((prevText) => prevText + "\n");
        break;
      case "Space":
        setTypedTexts((prevText) => prevText + " ");
        break;
      case "Tab":
        setTypedTexts((prevText) => prevText + "\t");
        break;
      case "Caps":
        setIsCapsActive((prevState) => !prevState);
        break;
      case "Ctrl":
      case "Win":
      case "Alt":
      case "Shift":
        break;
      default:
        const finalText = isCapsActive
          ? e.target.value.toUpperCase()
          : e.target.value.toLowerCase();
        setTypedTexts((prevText) => prevText + finalText);
        break;
    }
    // console.log(typedTexts);
  };

  const clearAllHandle = () => {
    setTypedTexts("");
  };

  return (
    <div className="container">
      <TypedKeys typedTexts={typedTexts} />

      <div className="keys">
        <div className="rows">
          {firstRow &&
            firstRow.map((key, index) => (
              <KeyItem
                key={index}
                keyBtn={key}
                keyClickHandler={keyClickHandler}
              />
            ))}
        </div>
        <div className="rows">
          {secondRow &&
            secondRow.map((key, index) => (
              <KeyItem
                key={index}
                keyBtn={key}
                keyClickHandler={keyClickHandler}
              />
            ))}
        </div>
        <div className="rows">
          {thirdRow &&
            thirdRow.map((key, index) => (
              <KeyItem
                key={index}
                keyBtn={key}
                keyClickHandler={keyClickHandler}
                isCapsActive={isCapsActive}
              />
            ))}
        </div>
        <div className="rows">
          {fourthRow &&
            fourthRow.map((key, index) => (
              <KeyItem
                key={index}
                keyBtn={key}
                keyClickHandler={keyClickHandler}
              />
            ))}
        </div>
        <div className="rows">
          {fifthRow &&
            fifthRow.map((key, index) => (
              <KeyItem
                key={index}
                keyBtn={key}
                keyClickHandler={keyClickHandler}
              />
            ))}
        </div>
      </div>

      <ClearAllBtn clearAllHandle={clearAllHandle} />
    </div>
  );
}

export default App;
