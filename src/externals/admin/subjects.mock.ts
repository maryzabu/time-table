export const createSubjectsMock = () =>
  subjectsMock.map((name, index) => ({
    id: index.toString(),
    name,
  }));

const subjectsMock = [
  "Английский язык",
  "Индивидуальный проект",
  "Литература",
  "Испанский язык",
  "Обществознание",
  "История",
  "Физика",
  "Математика",
  "Столовая пауза",
  "Разговоры о важном",
];
