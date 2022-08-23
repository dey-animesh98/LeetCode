/*
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109 */

//--Correct solution
{//T.C = O(m*n) , S.C -O(m*n)
    var transpose = function (matrix) {
        const result = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0))
        // console.log(result)
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                result[c][r] = matrix[r][c]
            }
        }
        return result
    };
}

//Will not work for r.length !== c.length

var transpose = function (matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix[r].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }
    return matrix
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(transpose(matrix))

/**
 * A subsequence of an array is a new array that is formed from the original array by deleting some 
 * (can be none) of the elements without disturbing the relative positions of the remaining elements. 
 * (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).
 */