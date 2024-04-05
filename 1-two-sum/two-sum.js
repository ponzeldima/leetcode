/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++){
        let x = target - nums[i];
        if(hashMap.has(x)){
            return [i, hashMap.get(x)];
        }
        
        hashMap.set(nums[i], i);
    }
};