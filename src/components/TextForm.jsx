import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //Upper Case
  const handleUpClick = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("Converted to Upper Case", "success");
  };

  //Lower Case
  const handleLwClick = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Converted to Lower Case", "success");
  };

  //clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };

  // copy text
  const handleCopyClick = () => {
    let text = document.getElementById("textBox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied", "success");
  };

  //remove extra spaces
  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };

  // Capitalize First Letter
  const handleFirstLetter = () => {
    let newTxt = text.trim().split(/[ ]+/);
    let arr = [];
    for (let x = 0; x < newTxt.length; x++) {
      let newArr = newTxt[x][0].toUpperCase() + newTxt[x].slice(1);
      arr.push(newArr);
    }
    let str = arr.join(" ");
    setText(str);
    props.showAlert("First letter is capital of each word", "success");
  };

  // when we use the text box or input to update the value then we use this syntax
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // text = 'jsaj'    //invalid way to change the value
  // setText('siajsd')    //correct way to change

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white"}}
      >
        <div className="my-3">
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <textarea
              className= "form-control"
              id="textBox"
              value={text}
              onChange={handleOnChange}
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
            <div className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
              Convert to Upper Case
            </div>
            <div className="btn btn-primary my-2 mx-2" onClick={handleLwClick}>
              Convert to Lower Case
            </div>
            <div
              className="btn btn-primary my-2 mx-2"
              onClick={handleClearClick}
            >
              Clear Text
            </div>
            <div
              className="btn btn-primary my-2 mx-2"
              onClick={handleCopyClick}
            >
              Copy Text
            </div>
            <div
              className="btn btn-primary my-2 mx-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </div>
            <div
              className="btn btn-primary my-2 mx-2"
              onClick={handleFirstLetter}
            >
              Capitalize First Letter
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.trim().split(" ").length} words and {text.length} character{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minute to read</p>

        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above textbox to preview"}
        </p>
      </div>
    </>
  );
}
