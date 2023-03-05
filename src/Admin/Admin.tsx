import { DatePicker, Form, Modal, notification, Select } from "antd";

import { useForm, useWatch } from "antd/es/form/Form";
import { WeekDayE } from "./types";
import dayjs, { Dayjs } from "dayjs";

import { repositories } from "../externals/repositories";
import {
  TimeRowDataT,
  WeekDateDayRequest,
} from "../externals/admin/adminRepositories";
import { adminRepositoriesMock } from "../externals/admin/adminRepositories.mock";
import { useState } from "react";
import { TableDay } from "./EditData/TableDay";

export type AdminProps = {};
type FormValues = {
  weekDay: WeekDayE;
  date: Dayjs;
  data: TimeRowDataT[];
};

export const Admin: React.FC<AdminProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const [form] = useForm<FormValues>();
  const [modal, contexModalHolder] = Modal.useModal();

  const { getWeekDateDay } = /*repositories*/ adminRepositoriesMock;

  const weekDay = useWatch<FormValues>("weekDay", form);
  const data = useWatch<FormValues>("data", form);

  const onWeekDayChange = (wDay: WeekDayE | null) => {
    form.setFieldValue("date", null);
  };
  const request = () => {
    setIsLoading(true);
    getWeekDateDay(form.getFieldsValue() as unknown as WeekDateDayRequest)
      .then(async ({ data, weekDay, date }) => {
        setIsLoaded(true);
        setIsLoading(false);
        form.setFieldValue(
          "data",
          data.map(({ time, ...other }) => ({
            time: [dayjs(time[0], "HH:mm"), dayjs(time[1], "HH:mm")],
          }))
        );
        form.setFieldValue("weekDay", weekDay);
        form.setFieldValue("date", dayjs(date));
      })
      .catch((error) =>
        api.error({
          message: "Ошибка",
          description: `Сервер ответил с ошибкой: ${error}`,
        })
      );
  };

  const onDateChange = (date: Dayjs | null) => {
    if (!date) {
      form.setFieldValue("weekDay", null);
      return;
    }

    const setedWeekDay = getWeekDay(date);

    if (WEEK_DAY_VALUES.includes(setedWeekDay as WeekDayE)) {
      form.setFieldValue("weekDay", setedWeekDay);
      modal.confirm({
        title: "Подтвердите изменение данных",
        content:
          "Вы действительно хотите заменить введенные Вами данные о расписании на данные с сервера?",
        okText: "Да",
        cancelText: "Нет",
        onOk: request,
      });
    } else {
      form.setFieldValue("weekDay", null);
    }
  };

  return (
    <div className="admin" style={{ textAlign: "center" }}>
      {contextHolder}
      {contexModalHolder}
      <h1 style={{ textAlign: "center" }}>Редактирование расписания</h1>
      <div>
        <Form form={form} layout={"inline"}>
          <Form.Item
            name="weekDay"
            label="На день недели"
            className="week-day"
            style={{ maxWidth: 350 }}
          >
            <Select
              options={OPTIONS_WEEK_DAY_SELECT}
              placeholder="Выберите день недели"
              allowClear={false}
              onChange={onWeekDayChange}
            />
          </Form.Item>
          <Form.Item
            name="date"
            label="Дата"
            className="week-day"
            style={{ maxWidth: 350 }}
          >
            <DatePicker
              format="DD.MM.YYYY"
              allowClear={false}
              className="date-picker"
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.List name="data">
            {(fields, { add, remove }) =>
              isLoaded && <TableDay data={fields} />
            }
          </Form.List>
        </Form>
      </div>
    </div>
  );
};
const getWeekDay = (date: Dayjs) => {
  const wDay = date.format("dddd");
  return `${wDay[0].toUpperCase()}${wDay.substring(1)}`;
};

const WEEK_DAY_VALUES = Object.values(WeekDayE);
const OPTIONS_WEEK_DAY_SELECT = WEEK_DAY_VALUES.map((label) => ({
  label,
  value: label,
}));
