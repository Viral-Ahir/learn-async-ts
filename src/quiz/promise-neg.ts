const array2D_3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

/**
 * Function to check if a row has a negative number
 * @param row  1D array
 * @param rowIndex  index of the row
 * @returns  Promise<void>
 */
const hasNegativeNumber = (row: number[], rowIndex: number): Promise<void> => {
  return new Promise((resolve) => {
    const containsNegative = row.some((num) => num < 0);
    if (containsNegative) {
      console.log(`One negative number in row ${rowIndex}`);
    }
    resolve();
  });
};

/**
 * Function to log rows with negative numbers
 * @param array2D  2D array
 * @returns  Promise<void[]>
 */
const logNegativeRows = (array2D: number[][]): Promise<void[]> => {
  const rowPromises = array2D.map((row, index) =>
    hasNegativeNumber(row, index)
  );
  return Promise.all(rowPromises);
};

/**
 * Test usage
 */
logNegativeRows(array2D_3).then(() => {
  console.log("Completed checking for negative numbers.");
});
