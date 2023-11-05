///////////////////////////////////1
/*function arrValue(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 ==0) {
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}

console.log(arrValue([3,4,6,8,2,5,2,10,12]));*/

/////////////////////////////////////2
/*function arrValue(arr,multiplyARrr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*multiplyARrr);
    }
    return newArr;
}

console.log(arrValue([3,4,6,8,2,5,2,10,12], 2));*/

/////////////////////////////////////////3
const smile = [':)', '=)',':)', '=)',':)', '=)'];
function change(smileArr, newSmile){
    let newArr = [];
    for (let i = 0; i < smileArr.length; i++) {
        if (smileArr[i] == '=)') {
            newArr.push(newSmile);

        }
        
    }
    return newArr;
}

console.log(change(smile,':)'));