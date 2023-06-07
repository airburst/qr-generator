import { OFFSET, RADIUS } from "../constants";

// Create a circle that fills a 1x1 block element in the SVG 'grid'
export const circlePath = (
  cx: number,
  cy: number,
  r: number = RADIUS
): string => {
  const x = cx + OFFSET;
  const y = cy + OFFSET;

  return `M${x},${y}m${r},0a${r},${r} 0 1,1 ${-r * 2},0a${r},${r} 0 1,1 ${
    r * 2
  },0`;
};
