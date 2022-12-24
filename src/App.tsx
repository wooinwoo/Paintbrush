import "./App.css";
import Canvas from "./components/canvas";
import ColorPicker from "./components/colorPicker";

function App() {
  return (
    <div className="pt-10 bg-gray-300 h-screen">
      <Canvas />
      <ColorPicker />
    </div>
  );
}

export default App;
