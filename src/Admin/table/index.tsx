import {DatePicker, Space, Table, Tag} from 'antd';
import {TableDay} from "./TableDay";
import React, {useEffect, useState} from "react";
import {AdminProps} from "../Admin";

export const TableComponent: React.FC<AdminProps> = ({data}) => {

  const [openDatePicker, setOpenDatePicker] = useState(false);
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1 style={{textAlign: 'center'}}>Редактирование расписания</h1>
      <div className={'i-flex-container'}>
        {data.map(({date, data}) => <div className={'.i-flex-item'}><TableDay data={data} date={date}
                                                                              setOpenDatePicker={setOpenDatePicker}/>
        </div>)}
      </div>
    </div>
  );
}
