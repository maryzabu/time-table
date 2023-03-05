import {DatePicker, Space, Table, Tag} from 'antd';
import {TableDay} from "./TableDay";
import React, {useEffect, useState} from "react";
import {WeekDateDayResponse} from "../../externals/admin/adminRepositories";

type Props = {
  data: WeekDateDayResponse;
}
export const TableComponent: React.FC<Props> = ({data}) => {

  const [openDatePicker, setOpenDatePicker] = useState(false);
  return (
    <div className="admin" style={{textAlign: 'center'}}>
      <h1 style={{textAlign: 'center'}}>Редактирование расписания</h1>
      <div className={'i-flex-container'}>
        <TableDay {...data}
                  setOpenDatePicker={setOpenDatePicker}/>
      </div>
    </div>
  );
}
