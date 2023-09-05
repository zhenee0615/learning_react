import { useState } from "react";
import Content from "./Content";
function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <Content
      color = {color}
      setColor = {setColor}
      hexValue = {hexValue}
      setHexValue = {setHexValue}
      isDarkText = {isDarkText}
      setIsDarkText = {setIsDarkText}
    />
  );
}

export default App;
