
import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClearClick=()=>{
    // console.log("clear when button was clicked"+text);
    let newText='';
    setText(newText);
  }
  const handleCopy=()=>{
    console.log ("I am copy");
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleonchange=(event)=>{
    // console.log("on chan ge");
    setText(event.target.value);
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  } 

    const[text, setText] = useState('Enter text here');
    //text="changing the text" //wrong way to change the state
    //setText="changing the text"//correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea></div>
                <button className="btn btn-dark mx-3" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-dark mx-3" onClick={handleLoClick}>convert to lowercase</button>
                <button type="button" className="btn btn-dark mx-3" onClick={handleClearClick}>Clear text</button>
                <button type="button" className="btn btn-dark mx-3" onClick={handleCopy}>Copy text</button>
                <button type="button" className="btn btn-dark mx-3" onClick={handleExtraSpaces}>remove extra spaces</button>
                 
                {/* <button className="btn btn-primary mx-2" >Clear text</button> */}
            </div>
        <div className="container my-2">
          <h1>your text summary</h1>
          <div>
          <p>{text.split(" ").length} are words and {text.length} characters </p>
          </div>
        </div>
      </> 
  ) 
}

