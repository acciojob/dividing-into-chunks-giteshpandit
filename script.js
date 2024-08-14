const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let currentSubArray = [];
  let currentSum = 0;
  let result = [];

  for (let item of arr) {
    if (currentSum + item <= n) {
      currentSubArray.push(item);
      currentSum += item;
    } else {
      result.push(currentSubArray);
      currentSubArray = [item];
      currentSum = item;
    }
  }

  // Push the last subarray if it has any elements
  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

