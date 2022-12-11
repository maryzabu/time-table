import {Table} from "antd";

const columns = [
  {
    title: <>Класс /<br/>Время</>,
    dataIndex: 'time',
    key: 'time',
    render: (time: string) => <strong>{time}</strong>
  },
  {
    title: '10 г',
    dataIndex: 'c10g',
    key: 'c10g',
  },
  {
    title: '10 сэ',
    dataIndex: 'c10se',
    key: 'c10se',
  },
  {
    title: '10 т',
    dataIndex: 'c10t',
    key: 'c10t',
  },
  {
    title: '11 г',
    dataIndex: 'c11g',
    key: 'c11g',
  },
  {
    title: '11 сэ',
    dataIndex: 'c11se',
    key: 'c11se',
  },

  {
    title: '11 т',
    dataIndex: 'c11t',
    key: 'c11t',
  },
];

type Props = {
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

export function TableDay({date, data}: Props) {
  return (<Table columns={columns} title={() => date} dataSource={data} pagination={false}/>);
}
