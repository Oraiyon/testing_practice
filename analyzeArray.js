export const analyzeArray = (array) => {
  const average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
};
