import { atom } from "recoil";
export const eraserMode = atom({
  key: "eraserMode",
  default: false,
});

export const lineRangeValue = atom({
  key: "lineRangeValue",
  default: 1,
});

export const lineColor = atom({
  key: "lineColor",
  default: "black",
});
