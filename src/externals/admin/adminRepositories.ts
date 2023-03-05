import { WeekDayE } from "../../Admin/types";
import { Dayjs } from "dayjs";
import { api } from "../api";

const WEEK_DATE_DAY_REPO = "WEEK_DATE_DAY_REPO";
export const adminRepositories = {
  getWeekDateDay:(params:WeekDateDayRequest) =>  api.get<WeekDateDayResponse>("/api/weekdateday", params),
  getSubjects:()=>api.get<SubjectResponse>("/api/subjects"),
  getTeachers:()=>api.get<TeachersResponse>("/api/teachers")
};

export type TeachersResponse = {
  id: string;
  name: string;
  subjects: string[];
  room: string | null;
};

export type SubjectResponse = {
  id: string;
  name: string;
}[];
export type WeekDateDayRequest = {
  weekDay: WeekDayE;
  date: string;
};

export type WeekDateDayResponse = {
  weekDay: WeekDayE;
  // Начиная с этого дня, день должен быть кратным/сопоставлен с днем недели
  date: string;
  data: TimeRowDataT[];
};

export type TimeRowDataT = {
  time: [string, string];
  c10g: string;
  c10se: string;
  c10t: string;
  c11g: string;
  c11se: string;
  c11t: string;
};
