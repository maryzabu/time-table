import {DatePicker, Table, Typography} from "antd";
import React, {ReactElement} from "react";

import dayjs from "dayjs";


export type TableDayProps = {
  date: string;
  data: {
    time: string,
    c10g: string,
    c10se: string,
    c10t: string,
    c11g: string,
    c11se: string,
    c11t: string,
  }[],

}

type Props = TableDayProps & {
  setOpenDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
}
const columns = [
  {
    title: <>Класс /<br/>Время</>,
    dataIndex: 'time',
    key: 'time',
    render: (time: string) => <strong>{time}</strong>,
    className: 'first'

  },
  {
    title: '10 г',
    dataIndex: 'c10g',
    key: 'c10g',
    render: renderBr,
  },
  {
    title: '10 сэ',
    dataIndex: 'c10se',
    key: 'c10se',
    render: renderBr,
  },
  {
    title: '10 т',
    dataIndex: 'c10t',
    key: 'c10t',
    render: renderBr,
  },
  {
    title: '11 г',
    dataIndex: 'c11g',
    key: 'c11g',
    render: renderBr,
  },
  {
    title: '11 сэ',
    dataIndex: 'c11se',
    key: 'c11se',
    render: renderBr,
  },

  {
    title: '11 т',
    dataIndex: 'c11t',
    key: 'c11t',
    render: renderBr,
  },
];

export function TableDay({date, data, setOpenDatePicker}: Props) {
  const dateDjs = dayjs(date);
  const letterDate = dateDjs.format('dddd');


  return (<Table columns={columns} title={() =>( 
    <Typography.Text>
      {letterDate[0].toUpperCase()}{letterDate.substring(1)} <DatePicker format="DD.MM.YYYY" value={dateDjs} allowClear={false}/>
    </Typography.Text>)}

                 dataSource={data} pagination={false} className={'table-day'}/>);
}

function renderBr(text: string): ReactElement {
  return text.split('\n').reduce((prev: ReactElement, text) => <>{prev}{text}<br/></>, <></>);
}
