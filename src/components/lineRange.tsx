import { useSetRecoilState } from "recoil";
import { lineRangeValue } from "../state/Recoil";

export default function LineRange() {
  const setLineValue = useSetRecoilState(lineRangeValue);
  return (
    <input
      type="range"
      name="points"
      min="0"
      max="100"
      onChange={(e) => setLineValue(Number(e.target.value))}
    />
  );
}
