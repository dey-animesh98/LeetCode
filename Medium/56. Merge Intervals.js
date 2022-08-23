/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

//--
{// O(n log(n))
    var merge = function (intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        const res = [intervals[0]]

        for (let pair of intervals) {
            let e1 = res[res.length - 1][1]
            let s2 = pair[0]
            let e2 = pair[1]

            if (e1 >= s2) {
                res[res.length - 1][1] = Math.max(e1, e2)
            } else {
                res.push(pair)
            }
        }
        return res
    };
}


function fibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let sum = 0;
  
    for (let i = 2; i < n; i++) {
      sum = n1 + n2;
      n1 = n2;
      n2 = sum;
    }
  
    return n === 0 ? n1 : n2;
  }
  
  const result = fibonacci(100);
  console.log(result);