/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
 */

//--

{// O(n)
    const countNegatives = function (grid) {
        let count = 0
        for (let i = 0; i < grid.length; i++) {
            let end = grid[i].length - 1
            while (grid[i][end] < 0) {
                count++
                end--
            }
        }
        return count
    };
    // console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))
}


{//O(n)
    const countNegatives = function (grid) {
       let flat = grid.flat(1)
       let count = 0
       for(let ele of flat){
        if (ele < 0) {
            count++
        }
       }
       return count
    }

    console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))
}