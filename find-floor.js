function findFloor(arr, goal) {
    let start = 0;
    let end = arr.length - 1;

    if (goal > arr[end]) return arr[end];

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > goal) {
            //on right side of goal
            if(arr[mid - 1] <= goal) {
                //this is the one
                return arr[mid - 1];
            } 
            //set the new end
            end = mid - 1;
        } else if(arr[mid] < goal) {
            //on left side of goal
            if(arr[mid + 1] >= goal) {
                //this is the one
                return arr[mid];
            }
            start = mid + 1;
        } else {
            //at goal
            return arr[mid];
        }
    }
    return -1;
}
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
module.exports = findFloor