import { bitmaskToPath } from "./bitmaskToPath";
import { bitmaskToSpotsPath } from "./bitmaskToSpotsPath";
import { FOREGROUND_COLOR } from "../constants";
import { GridType, NumberGridType } from "../types";

type Props = {
  data: GridType;
  spots?: boolean;
};

const convertBoolToNumberGrid = (data: GridType): NumberGridType =>
  data.map((row) => row.map((cell) => +cell));

export const generateSvg = ({ data, spots }: Props): string => {
  const width = data[0].length;
  const height = data.length;
  const grid = convertBoolToNumberGrid(data);

  const path = spots ? bitmaskToSpotsPath(grid) : bitmaskToPath(grid);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${path}" fill="${FOREGROUND_COLOR}"  /></svg>`;
};

// stroke="white" stroke-width="${STROKE_ROUND}" stroke-linecap="round" stroke-linejoin="round"
