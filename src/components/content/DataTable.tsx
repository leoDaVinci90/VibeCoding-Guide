import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import s from "./content.module.css";

export type TableRow = {
  /** Left-most cell rendered as a row header. */
  head: ReactNode;
  cells: ReactNode[];
};

/**
 * Generic comparison / data table. First column of each row is a <th scope="row">.
 */
export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: TableRow[];
}) {
  return (
    <Reveal y={12}>
      <div className={s.tableWrap}>
        <div className={s.tableScroll}>
          <table className={s.table}>
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={r}>
                  <th scope="row">{row.head}</th>
                  {row.cells.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
