var summation = function (num) {
  if (num <= 1) {
    return num;
  }
  const sum = (num / 2) * (1 + num);
  return sum;
};
console.log(summation(213));
console.log(summation(1));
