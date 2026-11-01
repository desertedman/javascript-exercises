const sumAll = function (a, b) {
  if (Number.isInteger(a) == false || Number.isInteger(b) == false)
    return "ERROR";
  else if (a < 0 || b < 0)
    return "ERROR";

  let min = Math.min(a, b);
  let max = 0;

  if (min == a)
    max = b;
  else
    max = a;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
