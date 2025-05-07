export const reduceArraytoString = (data) => {
  const count = data?.length ?? 0;
  if (count !== 0) {
    const outputString = data.reduce((acc, current) => {
      return acc + current.name + " ";
    }, "");
    return outputString;
  } else {
    return "";
  }
};
