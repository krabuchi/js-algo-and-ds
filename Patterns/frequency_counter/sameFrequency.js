/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

const sameFrequency = (num1, num2) => {
    let n1 = num1 + '';
    let n2 = num2 + '';
    let obj = {};
    for(let i of n1) {
        if(!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i]++;
        }
    }

    for(let k of n2) {
        if(obj[k]) {
            obj[k]--;
        } else {
            return false;
        }
    }
    return true;
};