export const getDurationInYears = (startDate:string) => {
  const start = new Date(startDate);
  const end = new Date();

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [
    years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "",
    months ? `${months} ${months === 1 ? "mo" : "mos"}` : "",
  ].filter(Boolean);

  return parts.join(" ") || "0 mos";
};