import "./App.css";
import Canvas from "./components/canvas";
import ColorPicker from "./components/colorPicker";
import LineThickness from "./components/lineThickness";
import Eraser from "./components/eraser";

function App() {
  return (
    <div className="pt-10 bg-gray-300 h-screen">
      <Canvas />
      <ColorPicker />
      <LineThickness />
      <Eraser />
    </div>
  );
}

export default App;
