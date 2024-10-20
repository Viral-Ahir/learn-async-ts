/**
 * Function to sum 2D array
 * @param arr  2D array
 * @returns  Promise<number>
 */
function sum2DArray(arr: number[][]): Promise<number> {
  return new Promise((resolve, reject) => {
    console.log("Sum called ... ");
    if (arr.length === 0) {
      reject("Cannot sum an empty array");
    }
    setTimeout(() => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(`Adding ${arr[i][j]} to sum`);
          sum += arr[i][j];
        }
      }
      resolve(sum);
    }, 0);
    console.log("returning from sum");
  });
}

/**
 * Test usage
 */
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

sum2DArray(array2D)
  .then((result) => console.log("1 - Sum of array2D:", result))
  .catch((error) => console.error("Error:", error));

sum2DArray([])
  .then((result) => console.log("2 - Sum of empty array:", result))
  .catch((error) => console.error("Error:", error));
