/*let age = Number(prompt('Your age?'));
var TorF = age >= 18 ? "True" : "False";
console.log(TorF);*/

//////////////////////////////////////////////////////

let firstNumber = Number(prompt('Перше число:'));
let secondNumber = Number(prompt('Друге число:'));
let action = prompt('+','-','/','*');
let sum = 0;
if (action == '+') {
    sum = firstNumber + secondNumber;
    console.log(sum);
}
if(action == '-'){
    sum = firstNumber - secondNumber;
    console.log(sum);
}
if(action == '/'){
    sum = firstNumber / secondNumber;
    console.log(sum);
}
if(action == '/' && secondNumber == 0){
    console.log('Error');
}
if(action == '*'){
    sum = firstNumber * secondNumber;
    console.log(sum);
}



/*else if(action == '-'){
    sum = firstNumber - secondNumber;
    console.log(sum);
}
else if(action == '/'){
    sum = firstNumber / secondNumber;
    console.log(sum);


}
else if(action == '*'){
    sum = firstNumber * secondNumber;
    console.log(sum);
}*/
