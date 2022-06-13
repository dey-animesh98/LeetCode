/*
1295. Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.
Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5
*/
//Need to include incase of negetive digits
//-------My Sol
{
    const findNumbers = function(nums) {
        let numArr = nums.join(' ').split(' ')
        let count =  0
        for(let i=0; i<numArr.length; i++){
            if(numArr[i].length % 2 == 0){
                count++
            }
        } 
        return count
    };
}
//-------My Sol 2
{
    const findNumbers = function(nums) {
        let count = 0
        for(let digits of nums ){
            if(Math.ceil(Math.log10(digits)) % 2 ==0){
                count++
            }
        }
        return count
    };
    console.log(findNumbers([555,901,482,1771]))
}
//-----3
{
    const findNumbers = function(nums) {
        let count = 0
        nums.forEach((e)=> {
           if( Math.floor(Math.log10(e)+1) % 2 ==0)
            count++
        })
        return count
    };
}
//-----Alternative Methods HOF

{
//use filter

function findNumbers(n) {
    return n.filter(a => (a + '').length % 2 === 0).length
}

}
//use map
{
function findNumbers(n) {
    return n.map(a => (a + '').length % 2 === 0).filter(v => v).length
}

}


console.log(Math.ceil(Math.log10(121212121212)))
console.log(Math.ceil(Math.log(121212121212)))