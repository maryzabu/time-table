import {
  DatePicker,
  Form,
  FormListFieldData,
  Table,
  TimePicker,
  Typography,
} from "antd";
import React, { ReactElement } from "react";

import dayjs from "dayjs";
import { WeekDayE } from "../types";
import { WeekDateDayResponse } from "../../externals/admin/adminRepositories";

export type TableDayProps = WeekDateDayResponse;

type Props = {
  data: FormListFieldData[];
};
const columns = [
  {
    title: (
      <>
        Класс /<br />
        Время
      </>
    ),
    dataIndex: "time",
    key: "time",
    render: (time: string, record: FormListFieldData, index: number) => (
      <Form.Item
        rules={[{ required: true }]}
        name={[record.name, "time"]}
        noStyle
      >
        <TimePicker.RangePicker
          format="HH:mm"
          allowEmpty={[false, false]}
          allowClear={false}
          minuteStep={10}
        />
      </Form.Item>
    ),
    className: "first",
  },
  /*  {
      title: "10 г",
      dataIndex: "c10g",
      key: "c10g",
      render: renderBr,
    },
    {
      title: "10 сэ",
      dataIndex: "c10se",
      key: "c10se",
      render: renderBr,
    },
    {
      title: "10 т",
      dataIndex: "c10t",
      key: "c10t",
      render: renderBr,
    },
    {
      title: "11 г",
      dataIndex: "c11g",
      key: "c11g",
      render: renderBr,
    },
    {
      title: "11 сэ",
      dataIndex: "c11se",
      key: "c11se",
      render: renderBr,
    },
  
    {
      title: "11 т",
      dataIndex: "c11t",
      key: "c11t",
      render: renderBr,
    },*/
];

export function TableDay(fields: Props) {
  return (
    <Table
      columns={columns}
      dataSource={fields.data}
      pagination={false}
      className={"table-day"}
    />
  );
}

function renderBr(text: string): ReactElement {
  return text.split("\n").reduce(
    (prev: ReactElement, text) => (
      <>
        {prev}
        {text}
        <br />
      </>
    ),
    <></>
  );
}
