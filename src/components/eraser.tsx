import { useRecoilState } from "recoil";
import { eraserMode } from "../state/Recoil";

export default function Eraser() {
  const [eraser, setEraser] = useRecoilState(eraserMode);
  return (
    <button
      className="w-52 h-52 block bg-gray-50"
      onClick={() => setEraser(!eraser)}></button>
  );
}
