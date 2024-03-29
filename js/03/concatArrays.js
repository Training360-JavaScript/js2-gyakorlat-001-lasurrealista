const concatArrays = (char, ...arrays) => {
  const arr = arrays.flat();
  return arr
    .filter((item, index) => arr.indexOf(item) === index)
    .filter((item) => !item.includes())
    .map((item) => item.trimEnd());
};

export default concatArrays;
