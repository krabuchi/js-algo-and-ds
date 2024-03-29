/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

const averagePair = (arr, num) => {
    if(!arr.length || !num) return false;
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        let avg = (arr[i] + arr[j]) / 2;
        if(avg === num) return true;
        else if(avg < num) i++;
        else j--;
    }
    return false;
};

averagePair([1,2,3], 2.5);