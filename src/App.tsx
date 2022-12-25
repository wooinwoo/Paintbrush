import "./App.css";
import Canvas from "./components/canvas";
import ColorPicker from "./components/colorPicker";
import LineThickness from "./components/lineThickness";

function App() {
  return (
    <div className="pt-10 bg-gray-300 h-screen">
      <Canvas />
      <ColorPicker />
      <LineThickness />
    </div>
  );
}

export default App;
