import bitmaskToPath from "@pictogrammers/bitmask-to-svg";
import { FOREGROUND_COLOR, STROKE_ROUND } from "../constants";
import { GridType, NumberGridType } from "../types";

const convertBoolToNumberGrid = (data: GridType): NumberGridType =>
  data.map((row) => row.map((cell) => +cell));

export const generateSvg = (data: GridType): string => {
  const width = data[0].length;
  const height = data.length;
  const path = bitmaskToPath(convertBoolToNumberGrid(data));

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${path}" fill="${FOREGROUND_COLOR}" stroke="white" stroke-width="${STROKE_ROUND}" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
};
