/*
744. Find Smallest Letter Greater Than Target

Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
Note that the letters wrap around.
For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"

Example 3:
Input: letters = ["c","f","j"], target = "d"
Output: "f"
Constraints:
2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
*/
//----
{
  var nextGreatestLetter = function (letters, target) {
    let start = 0
    let end = letters.length - 1
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2)
      if (target < letters[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    };
    return letters[start % letters.length] 
  }
  console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"))

}
//------
{
  const nextGreatestLetter = function (letters, target) {
    if (target < letters[0] || target >= letters[letters.length - 1])
      return letters[0];

    let step = Math.floor(letters.length / 2);
    let index = 0;
    while (step > 0) {
      while (index < letters.length && letters[index] <= target) {
        index += step;
      }
      index -= step;
      step = Math.floor(step / 2);
    }
    return letters[index + 1];
  };
  console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"))

}

//---
{
  const nextGreatestLetter = function (arr, target) {
    let start = 0, end = arr.length - 1, mid, result = arr[0];
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (arr[mid] > target) {
        result = arr[mid];
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  };
}
//--
{
  const nextGreatestLetter = function (letters, target) {
    for (let i of letters) {
      if (i > target) {
        return i
      }
    }
    return letters[0]
  };
}



//---
{
  const nextGreatestLetter = (letters, target) => letters.find(v => v > target) || letters.shift()
  console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"))
}

