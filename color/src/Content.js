import './index.css';
import colorNames from 'colornames';

const Content = ({color, setColor, hexValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <div className="App">
      <div className = "color" style = {{backgroundColor: `${color}`, 
        borderColor: `${color}`, 
        boxShadow: "none", 
        color: isDarkText ? "black" : "white"
      }}>
        <p className = 'colorName'>
          {color ? color : "Empty Value"}
        </p>
        <p className = 'hex'>
          {hexValue ? hexValue : null}
        </p>
      </div>
      
      <input 
        className = "colorInput"
        autoFocus
        type = "text"
        required
        placeholder = "Add color name"
        value = {color}
        onChange = {(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button
        type = 'button'
        onClick = {() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </div>
  )
}

export default Content