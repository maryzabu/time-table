import React from "react";
import {TableComponent} from "./EditData";
import {TableDayProps} from "./EditData/TableDay";
import {Form} from "antd";

export type AdminProps = {
  data: TableDayProps[];
}
export const Admin: React.FC<AdminProps> = (props) => {
/*const [form] = Form.useForm<FormValues>()*/


  return (<TableComponent {...props}/>);
};
