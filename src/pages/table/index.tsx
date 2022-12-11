import {Space, Table, Tag} from 'antd';
import {TableDay} from "./TableDay";
import {useEffect} from "react";

const data = [
  {
    date: '05 декабря',
    data: [
      {
        time: '8:30',
        c10g: 'Физика',
        c10se: '-',
        c10t: '-',
        c11g: '-',
        c11se: '-',
        c11t: '-',
      },
      {
        time: '8:30',
        c10g: 'Физика',
        c10se: '-',
        c10t: '-',
        c11g: '-',
        c11se: '-',
        c11t: '-',
      }
    ],
  },
  {
    date: ' Вторник 06 декабря',
    data: [
      {
        time: '8:30',
        c10g: 'Физика',
        c10se: '-',
        c10t: '-',
        c11g: '-',
        c11se: '-',
        c11t: '-',
      }
    ],
  }
];

export function TableComponent() {
  useEffect(()=>{
    // Request to server url when it's ready to send data;
  }, []);
  return (
    <div className="App">
      <h1>Расписание</h1>
      <Space size="large" style={{alignItems: 'flex-start'}}>
        {data.map(({date, data}) => <TableDay data={data} date={date}/>)}
      </Space>
    </div>
  );
}
