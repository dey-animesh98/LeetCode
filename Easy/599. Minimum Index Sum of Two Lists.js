/**
 * 
 *  599. Minimum Index Sum of Two Lists

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

 

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 

Constraints:

1 <= list1.length, list2.length <= 1000
1 <= list1[i].length, list2[i].length <= 30
list1[i] and list2[i] consist of spaces ' ' and English letters.
All the stings of list1 are unique.
All the stings of list2 are unique
 */
//--
{// 136/135 test cases passed
  var findRestaurant = function (list1, list2) {

    let map = new Map()
    for (let ele of list1) {
      map.set(ele, map.get(ele))
    }
    for (let ele of list2) {
      map.set(ele,1)
    }
    let str = [], max = 0
    for (let pairs of map) {
      if (pairs[1] > max) {
        max = pairs[1]
        str = []
        str.push(pairs[0])
      } else if (pairs[1] === max) {
        str.push(pairs[0])
      }
    }

    let minIdx = 2000, minEle = []
    if (str.length === 1) return str
    else {
      for (let ele of str) {
        let idx1 = list1.indexOf(ele)
        let idx2 = list2.indexOf(ele)
        let sum = idx1 + idx2
        if (sum <= minIdx) {
          minIdx = sum
          minEle.push(ele)
        }
      }
    }
    return minEle
  };

  /** Failed Case
   * Input
["Shogun","Piatti","Tapioca Express","Burger King","KFC"]
["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output
["Shogun","Piatti"]
Expected
["Piatti"]
   */
}

{
  var findRestaurant = function (list1, list2) {
    const map = new Map();

    let min = null;
    let result = [];

    for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
    for (let i = 0; i < list2.length; i++) {
      if (map.has(list2[i])) {
        const diff = i + map.get(list2[i]);

        if (min === null) {
          min = diff;
          result.push(list2[i])
        } else if (min > diff) {
          min = diff;
          result = [];
          result.push(list2[i]);
        } else if (min === diff) {
          result.push(list2[i])
        }
      }
    }

    return result;
  };
}