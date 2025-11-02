// Brute Force Approach to find the missing number in the array
function findMissingNumber(nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
}
console.log(findMissingNumber([1, 3, 0])); // 2
console.log(findMissingNumber([1, 2, 3])); // 0

// Optimized Approach to find the missing number in the array
function findMissingNumberOptimized(nums) {
    let mySet = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!mySet.has(i)) {
            return i;
        }
    }
}

console.log(findMissingNumberOptimized([1, 3, 0])); // 2
console.log(findMissingNumberOptimized([1, 2, 3])); // 0


function findMissingNumberMath(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1) / 2);
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumberMath([1, 3, 0])); // 2
console.log(findMissingNumberMath([1, 2, 3])); // 0