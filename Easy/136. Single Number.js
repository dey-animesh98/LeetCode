/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

//--
{
  const singleNumber = function (nums) {
    let map = {}
    for (let i in nums) {
      map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    let ans = Object.keys(map).filter(key => map[key] === 1)
    return ans.join('')
  };
  //   console.log(singleNumber([4,1,2,1,2]))   
}

{
  const singleNumber = function (nums) {
    let map = {}
    for (let i in nums) {
      map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    Object.prototype.getKey = function () {
      for (let key in map) {
        if (map[key] == 1) {
          return key;
        }
      }
    };
    return getKey()

  }

  //   console.log(singleNumber([4,1,2,1,2])) 
}

//--
{
  const singleNumber = function (nums) {
    let numHash = {}
    for (let num of nums) {
      if (numHash[num]) {
        delete numHash[num]
      } else {
        numHash[num] = 1
      }
    }
    console.log(numHash)
    return Object.keys(numHash)[0];
  }
  console.log(singleNumber([4,1,2,1,2,4,3,3,3,])) 
}

//--
{
  const singleNumber = function (nums) {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {

      ans = ans ^ nums[i] // ^ ??
      console.log(ans)
    }
    return ans
  };
  // console.log(singleNumber([4, 1, 2, 1, 2]))

}







/////////////////////// Various method to find key using value
{
  Object.prototype.getKeyByValue = function (value) {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] === value)
          return prop;
      }
    }
  }
  //////////////////////
  var test = {
    key1: 42,
    key2: 'foo'
  };

  //    console.log(test.getKeyByValue( 42 )) ;  // returns 'key1'
}
{
  Object.prototype.getKey = function (value) {
    for (var key in this) {
      if (this[key] == value) {
        return key;
      }
    }
  };

  // ISO 639: 2-letter codes
  var languageCodes = {
    DA: 'Danish',
    DE: 'German',
    DZ: 'Bhutani',
    EL: 'Greek',
    EN: 'English',
    EO: 'Esperanto',
    ES: 'Spanish'
  };

  var key = languageCodes.getKey('Greek');
  //   console.log(key); // EL
}