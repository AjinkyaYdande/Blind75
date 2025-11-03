// brute force approach O(n^2) time complexity
function pairSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

// console.log(pairSum([0, 7, 1, 9], 7)); // [0,1]
// console.log(pairSum([4, 9, 2, 1, 7], 5));   // [0,3]
// console.log(pairSum([4, 4], 8));   // [ 0,1]

// optimal approach using hashmap O(n) time complexity
function pairSumOptimized(numbers, target) {
    const myMap = new Map(); // Map stores key:value pair

    for (let i = 0; i <= numbers.length; i++) {
        let sum = target - numbers[i]; // 7 - 0  
        if (myMap.has(sum)) {   // checks if 7 is present
            return [myMap.get(sum), i];
        }
        myMap.set(numbers[i], i);
    }
    return [];
}

// console.log(pairSumOptimized([0, 7, 1, 9], 7)); // [0,1]
// console.log(pairSumOptimized([4, 9, 2, 1, 7], 5));   // [0,3]
// console.log(pairSumOptimized([4, 4], 8));   // [ 0,1]

// Optimised solution using 2 pointers.
// 2 pointers required arrays to be sorted
function pairSumUsingTwoPointers(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end){
        let sum = numbers[start] + numbers[end];
        if(sum === target){
            return [start,end];
        }else if(sum < target){
            start++;
        }else{
            end--
        }
    }
    return [];
}
console.log(pairSumUsingTwoPointers([0, 7, 1, 9], 7)); // [0,1]
console.log(pairSumUsingTwoPointers([4, 9, 2, 1, 7], 5));   // [0,3]
console.log(pairSumUsingTwoPointers([4, 4], 8));   // [ 0,1]




