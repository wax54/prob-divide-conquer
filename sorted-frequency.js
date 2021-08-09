function sortedFrequency(arr, goal) {
    let right = arr.length - 1;
    let left = 0;
    //untill we have exhausted our options...
    while(left <= right){
        //we'll find the middle
        let midpoint = Math.floor((right+left)/2);
        //if the value in the middle is bigger than the goal...
        if(arr[midpoint] > goal){
            //we are right of goal
            right = midpoint - 1;
        //otherwise, if the value is too small...
        } else if(arr[midpoint] < goal){
            //we are left of goal
            left = midpoint + 1;
        //if nothing else...
        } else {
            //we found goal!
            //find where goal stops based on what we know
            const rightIdx = findRight(arr, midpoint, right);
            //find where goal starts based on what we know
            const leftIdx = findLeft(arr, midpoint, left);
            //return the difference of the indexes + 1
            // 0 - 0 still means there is 1 number in the list
            return (rightIdx - leftIdx) + 1
        }
    }
    //out of options, numbers not here
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
            //  return curIdx
            return curIdx;
        }
        const midpoint = Math.ceil((curIdx+end)/2);
        //if halfway between curIdx and end is not same val as curIdx
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
        //(if at start of array arr -1 will be undefined)
        if (arr[curIdx] !== arr[curIdx - 1]) {
            //  return curGoal
            return curIdx;
        }
        const midpoint = Math.floor((start + curIdx) / 2);
        //if halfway between curIdx and begining is not the same as where we are at...
        if (arr[midpoint] !== arr[curIdx]) {
            //we are floating around in uncharted territory
            //left side is not past this point
            start = midpoint;
        } else {
            //we are still looking for left
            curIdx = midpoint
        }
    }
}

 console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
 console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1
module.exports = sortedFrequency