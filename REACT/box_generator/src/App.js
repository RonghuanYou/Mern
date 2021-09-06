import './App.css';
import { useState } from 'react'
import CreateBox from './components/CreateBox';
import DisplayBox from './components/DisplayBox';

function App() {
  // we can get it in display.jsx and createBox.jsx
  // elt: { newColor: "red", newWidth: 100, newHeight: 100 }
  const [boxes, setBoxes] = useState([{}])  

  // push new box into boxes array
  const addBox = (newColor, newWidth, newHeight) => {
    // pass all current boxes(copy), push one new boxColor
    setBoxes([...boxes, {newColor, newWidth, newHeight}])
  }


  return (
    <div className="App">
      <CreateBox addBox={addBox} />
      <DisplayBox boxes={boxes} />
    </div>
  );
}

export default App;
