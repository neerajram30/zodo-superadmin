export const getDateFromIso = (date) => {
  const isoDate = new Date(date);
  return isoDate.toLocaleDateString();
};
