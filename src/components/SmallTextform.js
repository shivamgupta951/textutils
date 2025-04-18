import React, { useState } from 'react';
export default function SmallTextform(props) {
  const [text, setText]=useState("");
  const [text1, setText1]=useState("");
  const [text2, setText2]=useState("");
  const updatetext1 = (event) =>
  {
    setText1(event.target.value);
  }
  const updatetext2 = (event) =>
  {
    setText2(event.target.value);
  }
  const updatetext = (event)=>
  {
    setText(event.target.value);
  }
  const cleartext = ()=>
  {
    let newtext="";
    setText(newtext);
  }
  const replaceall = ()=>
  {
    let newtext = text.replaceAll(text1,text2);
    setText(newtext);
  }
  const replacefirst = ()=>
  {
    let newtext = text.replace(text1,text2);
    setText(newtext);
  }
  const removespaces = ()=>
  {
    let newtext=text.split(/[ ]+/).join(" ").trim();
    setText(newtext);
  }
  const copytext = ()=>
  {
    let text1 = document.getElementById("mybox1");
    navigator.clipboard.writeText(text1.value);
  }  
  return (
    <div className="mb-3 mx-2">
      <br/>
      <div className="mb-3">
      <h6>{props.heading}</h6>
      <textarea className="form-control" onChange={updatetext} value={text} id="mybox1" rows="8" style={{ width: "700px"}}></textarea>
      </div>
      <h5>{props.buttonheading}</h5>
      <div className="mb-3">
        <textarea className="form-control" id="smallbox" rows="2" onChange={updatetext1} value={text1} style={{ width: "500px"}}></textarea>
        <br/>
        <textarea className="form-control" id="smallbox" rows="2" onChange={updatetext2} value={text2} style={{ width: "500px"}}></textarea>
      </div>
      <button onClick={replacefirst} className="btn btn-primary mx-1">{props.button+" First"}</button>
      <button onClick={replaceall} className="btn btn-primary mx-1">{"Replace All"}</button>
      <button onClick={cleartext} className="btn btn-primary mx-2">{props.button1}</button>
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
  );
}
