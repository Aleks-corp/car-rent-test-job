export const setUniqueMake = (data) => {
  const makeArr = [];
  data.map((item) => {
    makeArr.push(item.make);
  });
  const uniqueMake = [...new Set(makeArr)];
  return uniqueMake.map((item) => {
    return { value: item, label: item };
  });
};
