import { SIZE, FOREGROUND_COLOR, BACKGROUND_COLOR } from "../../constants";

type CellProps = {
  on: boolean;
};

export const Cell = ({ on }: CellProps) => {
  const backgroundColor = on ? FOREGROUND_COLOR : BACKGROUND_COLOR;

  return (
    <div
      style={{
        backgroundColor,
        height: SIZE,
        width: SIZE,
      }}
    ></div>
  );
};
