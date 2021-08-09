function findRotationCount(arr, goal) {
        start = 0;
        end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] < arr[start]) {
                //mid on right side of rotation break
                if(arr[mid] < arr[mid - 1]) return mid;
                else end = mid - 1;
            } else {
                if (arr[mid] > arr[mid + 1]) return mid + 1;
                else start = mid + 1;
            }
        }
    return 0;
    
}
// console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
// console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
// console.log(findRotationCount([7, 9, 11, 12, 15])) // 0
module.exports = findRotationCount