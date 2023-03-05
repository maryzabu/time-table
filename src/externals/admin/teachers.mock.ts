import {TeachersResponse} from "./adminRepositories";

export const createTeachersMock = ():TeachersResponse[] =>
  teachersMock.map((value, index) => ({
    id: index.toString(),
    ...value,
  }));

const teachersMock = [
  {
    name: 'Иванова В.В.',
    room: '404',
    subjects: ['0','8']
  },
  {
    name: 'Кайдаш М.А.',
    room: '402',
    subjects: ['0','8']
  },
  {
    name: 'Володин Р.С.',
    room: '312',
    subjects: ['1','8']
  },
  {
    name: 'Меркулова К.И.',
    room: null,
    subjects: ['2','8']
  },
  {
    name: 'Колбасова А.О.',
    room: '307',
    subjects: ['2','8']
  },
  {
    name: 'Казанцев О.А.',
    room: null,
    subjects: ['4','8']
  },
  {
    name: 'Димидов Л.Г.',
    room: null,
    subjects: ['5','8']
  },
  {
    name: 'Шкурай И.А.',
    room: null,
    subjects: ['7','8']
  },
  {
    name: 'Коваль В.В.',
    room: null,
    subjects: ['6','8']
  },
];
