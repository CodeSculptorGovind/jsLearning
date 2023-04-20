
// Basically, a function which takes another function as an argument or returns a function is known as a higher order function.

function isOdd(num) {
    return num%2!=0;
}

function find($num,callBack) {
    callBack($num);    
}

//simple call back
function find(num,callBack) {
    return callBack($num);    
}


with array
function filter(arr,callback) {
    const filterArr=[];
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index]) ? filterArr.push(arr[index]) : null;
    }
    return filterArr;
}
