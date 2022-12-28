import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { eraserMode, lineRangeValue } from "../state/Recoil";
export default function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const eraser = useRecoilValue(eraserMode);
  const lineValue = useRecoilValue(lineRangeValue);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerWidth * 0.8;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = lineValue;
    contextRef.current = context;

    setCtx(context);
  }, [lineValue]);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (eraser && isDrawing) {
        ctx.clearRect(offsetX, offsetY, 50, 50);
      } else if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
        className="rounded-lg m-auto bg-gray-50"></canvas>
    </>
  );
}
