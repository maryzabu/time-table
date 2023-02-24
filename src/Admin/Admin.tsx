import React from "react";
import {TableComponent} from "./table";
import {TableDayProps} from "./table/TableDay";

export type AdminProps = {
  data: TableDayProps[];
}
export const Admin: React.FC<AdminProps> = (props) => (
  <TableComponent {...props}/>
);
