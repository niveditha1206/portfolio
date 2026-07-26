export const getDurationInYears = (startDate:string) => {
  const start = new Date(startDate);
  const end = new Date();

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years}.${months} yrs`;
};