const removeFromArray = function (arr, ...numbers) {
  arr = Array.from(new Set(arr));

  numbers.forEach((num) => {
    let index = arr.indexOf(num);

    if (index >= 0) {
      arr.splice(index, 1);
    }
  })

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
