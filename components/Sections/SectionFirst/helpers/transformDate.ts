export const transformDate = (dateString: string) => {
  const [day, month, year] = dateString.split(".");
  return [day, month, year];
};