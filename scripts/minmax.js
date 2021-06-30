const arrEx = [1, 5, 235, 865, 190987, 4, 0, -1, -456, 6543, 12, 3556, 88];

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = min > arr[i + 1] ? arr[i + 1] : min;
    max = max < arr[i + 1] ? arr[i + 1] : max;
  }

  return console.log(`Result findMinMax in array ${arr}: min = ${min}, max = ${max}`);
}

findMinMax(arrEx)