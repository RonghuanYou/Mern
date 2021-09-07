import './App.css';
import { useState } from "react"
import Tabs from "./components/Tabs.jsx"

function App() {

  return (
    <div className="App">
      <Tabs tabContentsArr={[
        { header: "Tab1", content: "Tab1 content is showing here" },
        { header: "Tab2", content: "Tab2 content is showing here" },
        { header: "Tab3", content: "Tab3 content is showing here" }
      ]} />
    </div>
  );
}

export default App;
