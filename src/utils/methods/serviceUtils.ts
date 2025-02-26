const months = [
  { id: 0, mes: "Enero" },
  { id: 1, mes: "Febrero" },
  { id: 2, mes: "Marzo" },
  { id: 3, mes: "Abril" },
  { id: 4, mes: "Mayo" },
  { id: 5, mes: "Junio" },
  { id: 6, mes: "Julio" },
  { id: 7, mes: "Agosto" },
  { id: 8, mes: "Septiembre" },
  { id: 9, mes: "Octubre" },
  { id: 10, mes: "Noviembre" },
  { id: 11, mes: "Diciembre" },
  { id: -1, mes: "" },
];

export const getMonthByNumber = (monthNumber: number | null) => {
  return months.find((month) => month.id === monthNumber);
};

export const generateArrayOfYears = (): number[] => {
  const max = new Date().getFullYear();
  const min = max - 70;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};
