function opposite(number) {
  let neg = -parseFloat(number);
  if (number === 0 || number === -0) {
    return 0;
  }
  return neg;
  //   let num = -parseInt(number);
  //   console.log(num);
  //Works but only converts negative to positive number
  //   let num = Math.abs(number);
  //   console.log(num);
}
console.log(opposite(0));
console.log(opposite(12525220.3325));
