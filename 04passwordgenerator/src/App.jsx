import React, { useState, useCallback, useEffect } from 'react'
import './App.css'
import copy from "copy-to-clipboard";

const App = () => {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "!@#$&*"
    }

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(charIndex);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  const copyToClipboard = () => {
    copy(password);
    alert(`You have copied "${password}"`);
    setCopyText('');
  }

  return (
    <div className='main'>
      <div className="container">
        <h1>Password generator</h1>
        <div className="upper">
          <input type="text" value={password} onChange={(e) => setCopyText(e.target.value)} />
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="lower">
          <span><input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)} /><label>Length:({length} )</label></span>
          <span><input type="checkbox" name="number" id="number" onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} />Numbers</span>
          <span><input type="checkbox" name="character" id="character" onChange={() => {
            setCharAllowed((prev) => !prev);
          }} />Characters</span>
        </div>
      </div>
    </div>
  )
}

export default App
