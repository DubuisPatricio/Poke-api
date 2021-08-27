export const idTaker = (url) => {
  const idPosition = 6;
  const urlDivision = url.split("/");
  const id = urlDivision[idPosition];

  return Number(id);
};
