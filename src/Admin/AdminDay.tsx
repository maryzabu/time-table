import React from "react";
import {TableComponent} from "./EditData";
import {TableDayProps} from "./EditData/TableDay";
type Props ={
  data: TableDayProps;
}
export const AdminDay:React.FC<Props>=(props)=>{
  return (<TableComponent {...props}/>);
}
