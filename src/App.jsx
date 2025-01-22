import  { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
function StringConverter() {
  const [inputString, setInputString] = useState("");
  const [convertedString] = useState("");
  

  // Functions for string conversion
  const toUpperCase = () => {
    
    setInputString(inputString.toUpperCase());
  };

  const toLowerCase = () => {
    setInputString(inputString.toLowerCase());
  };

  const reverseString = () => {
    setInputString(inputString.split("").reverse().join(""));
  };

  const clearText = () => {
    setInputString("");
   
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputString);
    alert("Text copied to clipboard!");
  };
  

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>String Converter App</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text here..."
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      ></textarea>
      <div>
        <button onClick={toUpperCase} style={buttonStyle}>
          Uppercase
        </button>
        <button onClick={toLowerCase} style={buttonStyle}>
          Lowercase
        </button>
        <button onClick={reverseString} style={buttonStyle}>
          Reverse
        </button>
        <button onClick={clearText} style={{ ...buttonStyle, backgroundColor: "#ff4d4d" }}>
          Clear
        </button>
        <button onClick={copyToClipboard} style={{ ...buttonStyle, backgroundColor: "#ff4d4d" }}>
        <FaRegCopy />
        </button>
      </div>
      {convertedString && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <h3>Converted String:</h3>
          <p style={{ fontSize: "18px" }}></p>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 15px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
};

export default StringConverter;
