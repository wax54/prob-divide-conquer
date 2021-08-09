function sortedFrequency(arr, goal) {
    let right = arr.length - 1;
    let left = 0;
    while(left <= right){
        let midpoint = Math.floor((right+left)/2);
        
        if(arr[midpoint] > goal){
            //we are right of goal
            right = midpoint - 1;
        } else if(arr[midpoint] < goal){
            left = midpoint + 1;
        } else {
            //we found goal!
            const rightIdx = findRight(arr, midpoint, right);
            const leftIdx = findLeft(arr, midpoint, left);
            return (rightIdx - leftIdx) + 1
        }
    }
    return -1;


    //find the right index of the goal
    //find the left index of the goal
    //subtract them and add 1

}


//find right
function findRight(arr, curIdx, end){

    while(true){
        //if at right
        if (arr[curIdx] !== arr[curIdx + 1]) {
            //  return curGoal
            return curIdx;
        }
        const midpoint = Math.floor((curIdx+end)/2);
        //if halfway between curGoal and end is not goal
        if(arr[midpoint] !== arr[curIdx]){
            //we are floating around in uncharted territory
            //right side is not past this point
            end = midpoint;
        } else {
            curIdx = midpoint
        }
    }


}


//find left
function findLeft(arr, curIdx, start) {

    while (true) {
        //if at left
        if (arr[curIdx] !== arr[curIdx - 1]) {
            //  return curGoal
            return curIdx;
        }
        const midpoint = Math.floor((start + curIdx) / 2);
        //if halfway between curGoal and end is not goal
        if (arr[midpoint] !== arr[curIdx]) {
            //we are floating around in uncharted territory
            //right side is not past this point
            start = midpoint;
        } else {
            curIdx = midpoint
        }
    }
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1
module.exports = sortedFrequency