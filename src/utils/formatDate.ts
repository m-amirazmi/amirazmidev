export const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Nov",
  "Dec",
];

export const formatDate = (date: string | number) => {
  const parseDate = new Date(date);
  const month = monthList[parseDate.getMonth()];
  const year = parseDate.getFullYear();
  const day = parseDate.getDate();
  const hour = parseDate.getHours();
  const minutes = parseDate.getMinutes();

  return { month, year, day, hour, minutes };
};
