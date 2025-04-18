import React, { useState } from 'react';
export default function Textform(props) {
  const [text, setText]=useState("");
  const convertupcase = ()=>
  {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const convertlwcase = ()=>
  {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const cleartext = ()=>
  {
    let newtext ="";
    setText(newtext);
  }
  const updatetext = (event)=>
  {
    setText(event.target.value);
  }
  const removespaces = ()=>
  {
    let newtext=text.split(/[ ]+/).join(" ").trim();
    setText(newtext);
  }
  const copytext = ()=>
  {
    let text1 = document.getElementById("mybox");
    navigator.clipboard.writeText(text1.value);
  }
  return (
    <div>
    <div className="mb-3 mx-2">
      <div className="mb-3">
      <h6>{props.heading}</h6>
      <textarea className="form-control" onChange={updatetext} value={text} id="mybox" rows="8" style={{ width: "700px"}}></textarea>
      </div>
      <h5>{props.buttonheading}</h5>
      <button onClick={convertupcase} className="btn btn-primary">{props.button1}</button>
      &nbsp;
      <button onClick={convertlwcase} className="btn btn-primary mx-1">{props.button2}</button>
      <button onClick={cleartext} className="btn btn-primary mx-2">{props.button3}</button>
      <button onClick={removespaces} className="btn btn-primary mx-1">Remove Spaces</button>
      <button onClick={copytext} className="btn btn-primary mx-2">{"Copy Text"}</button>
      <h4 className="my-3">Text Summary</h4>
      <p>
      Words {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} &nbsp;
      Characters {text.length}
      </p>     
      <p>
        {0.008 * text.split(' ').length} Minutes Read
      </p>
    </div>
    </div>
  ) 
}
