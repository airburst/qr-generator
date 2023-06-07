import { SIZE, FOREGROUND_COLOR, BACKGROUND_COLOR } from "../../constants";

type CellProps = {
  on: boolean;
  radius?: number;
};

export const Cell = ({ on, radius }: CellProps) => {
  const backgroundColor = on ? FOREGROUND_COLOR : BACKGROUND_COLOR;
  const style = {
    backgroundColor,
    height: SIZE,
    width: SIZE,
    borderRadius: radius ? `${radius}%` : "",
  };

  return <div style={style}></div>;
};
