let arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

function search(arr, k) {
  // Starting from top right which is (0,n-1)
  let i = 0;
  let j = arr[0].length - 1;
  let ans = {};
  while (i < arr.length && j >= 0) {
    if (arr[i][j] == k) {
      ans.x = i;
      ans.y = j;
      break;
    } else if (arr[i][j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
}
let k = 39;
let ans = search(arr, k);
if (Object.keys(ans).length === 0) {
  console.log("Element not present");
} else {
  console.log(`Coordinates of given element are x = ${ans.x}, y = ${ans.y}`);
}
