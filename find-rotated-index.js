function findRotatedIndex(arr, goal) {
    start = 0;
    end = arr.length - 1;
    let seeking = goal > arr[start] ? "left" : "right";

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(arr[mid] > goal){
            //we are looking for something smaller
            if(arr[mid] < arr[start]){
                //mid on right side of rotation break
                end = mid - 1;
            } else {
                //mid on left side of rotation break
                if(seeking === 'left'){
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        } else if (arr[mid] < goal) {
            //we are looking for something larger than what we found
            if (arr[mid] < arr[start]) {
                //we are on the right side of the array
                if(seeking = "right"){
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            } else {
                //we are on left side of array
                start = mid + 1
            }
        } else {
            //(arr[mid] === goal) 
                //found goal
                return mid;
        }
    }
    return -1;
}

function findRotatedIndexRecursive(arr, goal, start, end) {
    start = start || 0;
    end = end || arr.length - 1;
    let seeking = goal > arr[start] ? "left" : "right";

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > goal) {
            //we are looking for something smaller
            if (arr[mid] < arr[start]) {
                //mid on right side of rotation break
                findRotatedIndexRecursive(arr, goal, start, mid - 1);
            } else {
                //mid on left side of rotation break
                if (seeking === 'left') {
                    findRotatedIndexRecursive(arr, goal, start, mid - 1);
                } else {
                    findRotatedIndexRecursive(arr, goal, mid + 1, end);
                }
            }
        } else if (arr[mid] < goal) {
            //we are looking for something larger than what we found
            if (arr[mid] < arr[start]) {
                //we are on the right side of the array
                if (seeking = "right") {
                    findRotatedIndexRecursive(arr, goal, mid + 1, end);
                } else {
                    findRotatedIndexRecursive(arr, goal, start, mid - 1);
                }
            } else {
                //we are on left side of array
                findRotatedIndexRecursive(arr, goal, mid + 1, end);
            }
        } else {
            //(arr[mid] === goal) 
            //found goal
            return mid;
        }
    }
    return -1;
}
// console.log(findRotatedIndexRecursive([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1

module.exports = findRotatedIndex