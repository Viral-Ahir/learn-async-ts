const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * Function to sum a row
 * @param row  1D array
 * @returns  Promise<number>
 */
const sumRow = async (row: number[]): Promise<number> => {
  const rowSum = row.reduce((acc, num) => acc + num, 0);
  return rowSum;
};

/**
 * Function to sum 2D array using async/await
 * @param array2D  2D array
 * @returns  Promise<number>
 */
const sum2DArray1 = async (array2D: number[][]): Promise<number> => {
  const rowSums = await Promise.all(array2D.map((row) => sumRow(row)));
  return rowSums.reduce((acc, rowSum) => acc + rowSum, 0);
};

/**
 * Test usage
 */
sum2DArray1(array2D_1).then((totalSum) => {
  console.log(`The total sum is: ${totalSum}`);
});
