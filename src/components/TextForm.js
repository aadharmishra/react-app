import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here")

  const handleOnClick = () => {
    setText(text.toUpperCase())
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>Convert to uppercase</button>
    </div>
  )
}



