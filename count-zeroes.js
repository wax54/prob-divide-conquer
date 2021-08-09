function countZeroes(arr) {
    let testIdx = Math.floor(arr.length - 1/2);
    let loops = 0;
    while(true){
        loops++;
        if(arr[testIdx] === 0){
            if(testIdx === 0){
                return arr.length;
            }
            if(arr[testIdx - 1] === 1){
                return arr.length - testIdx;
            } else {
                testIdx = Math.floor(testIdx/2);
            }
        } else {
            if(testIdx === arr.length - 1){
                return 0;
            }
            else if(arr[testIdx + 1] === 0) {
                return arr.length - (testIdx + 1);
            }
            else {
                //set the idx to the middle between the end and the current idx
                testIdx = Math.floor(((testIdx + (arr.length-1))/2));
            }
        }
    }
}
// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])) // 4
// console.log(countZeroes([0, 0, 0])) // 3
// console.log(countZeroes([1, 1, 1, 1])) // 0
// console.log(countZeroes([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // 0
module.exports = countZeroes