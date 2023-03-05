import {SubjectResponse, TeachersResponse, WeekDateDayRequest, WeekDateDayResponse} from "./adminRepositories";
import { createWeekDay } from "../../Admin/EditData/createEditData";
import {createSubjectsMock} from "./subjects.mock";
import {createTeachersMock} from "./teachers.mock";

export const adminRepositoriesMock = {
  getWeekDateDay: (params: WeekDateDayRequest): Promise<WeekDateDayResponse> =>
    apiGetMock<WeekDateDayResponse>(createWeekDay()),
  getSubjects: ()=>apiGetMock<SubjectResponse>(createSubjectsMock()),
  getTeachers: ()=>apiGetMock<TeachersResponse[]>(createTeachersMock()),
};

const apiGetMock = <T>(props: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(props), 1000));
