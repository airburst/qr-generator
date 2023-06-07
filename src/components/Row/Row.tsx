import { Cell } from "../Cell";
import { RowType } from "../../types";
import styles from "./Row.module.css";

type RowProps = {
  data: RowType;
};

export const Row = ({ data }: RowProps) => {
  return (
    <div className={styles.row}>
      {data.map((on, i) => (
        <Cell key={`cell-${i}`} on={on} radius={0} />
      ))}
    </div>
  );
};
