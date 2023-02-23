import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("uppercase is click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelCleareClick = () => {
    let newText = '';
    setText(newText);
  };
  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  }
  const handelCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handelOnChange = (event) => {
    // console.log("onchange is click");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Enter text here to analyze below</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode==='dark'?'gray':'white'}}
          id="myBox"
          rows="6"
          onChange={handelOnChange}
          value={text}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handelUpClick}>
          Convert to UpperCase
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={handelLoClick}
      >
        Convert to LowseCase
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handelCopy}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={handelExtraSpace}
      >
        Remove Extra Space
      </button>
      <button type="button" className="btn btn-danger" onClick={handelCleareClick}>Cleare Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Youe text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
}
