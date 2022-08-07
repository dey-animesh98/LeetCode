

/**
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 // [40,11,26,27,-20]
// [4,2,1,3]
// [1,3,6,10,15]
// [3,8,-10,23,19,-4,-14,27]

Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106
 */

const minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let minDif = Infinity
    let res = []

    for (let i = 0; i < arr.length - 1; i++) {
        let currDif = Math.abs(arr[i + 1] - arr[i])
        if (currDif < minDif) minDif = currDif
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let dif = Math.abs(arr[i + 1] - arr[i])
        if (dif === minDif) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))


{
    const minimumAbsDifference = function (arr) {
        // Sort the original array
        arr.sort((x, y) => x - y);

        // Initialize minimum difference `minPairDiff` as a huge integer in order not 
        // to miss the absolute difference of the first pair. 
        let minPairDiff = Infinity;
        let answer = [];

        // Traverse the sorted array
        for (let i = 0; i < arr.length - 1; ++i) {
            // For the absolute value `currPairDiff` of the current pair:
            let currPairDiff = arr[i + 1] - arr[i];

            // If `currPairDiff` equals `minPairDiff`, add this pair to the answer list.
            // If `currPairDiff` is smaller than `minPairDiff`, discard all pairs in the answer list, 
            //add this pair to the answer list and update `minPairDiff`.
            // If `currPairDiff` is larger than `minPairDiff`, we just go ahead.
            if (currPairDiff == minPairDiff) {
                answer.push([arr[i], arr[i + 1]]);
            } else if (currPairDiff < minPairDiff) {
                answer = [];
                answer.push([arr[i], arr[i + 1]]);
                minPairDiff = currPairDiff;
            }
        }

        return answer;
    };
}


//--
{
    const minimumAbsDifference = function (arr) {
        // Sort the original array
        arr.sort((x, y) => x - y);
        let answer = [];

        // Initialize minimum difference as a huge integer in order not 
        // to miss the absolute difference of the first pair. 
        let minPairDiff = Infinity;

        // Traverse the sorted array and calcalute the minimum absolute difference.
        for (let i = 0; i < arr.length - 1; ++i) {
            minPairDiff = Math.min(minPairDiff, arr[i + 1] - arr[i]);
        }

        // Traverse the sorted array and check every pair again, if 
        // the absolute difference equals the minimum difference, 
        // add this pair to the answer list.
        for (let i = 0; i < arr.length - 1; ++i) {
            if (arr[i + 1] - arr[i] == minPairDiff) {
                answer.push([arr[i], arr[i + 1]]);
            }
        }

        return answer;
    };
}

