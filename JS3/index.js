////////////////////////////1
/*for(let i=0;i<=20;i++){
    if(i%2 == 0){
        console.log(i);
    }
}*/

////////////////////////////2
/*let j = 5;
let sum = 0;
for(let i = 1; i<j;i++)
{
    sum+=i;
}
console.log(sum);*/

/////////////////////////////3
/*for (let i = 10; i >= 0; i--) {
    
  }*/

////////////////////////////4

/*let days = ["Понеділок", "Середа", "Неділя"] 
let plans = ["Урок 03", "Урок 04", "Вихідни"]
  for(let i = 0; i<days.length; i++){
    console.log(`Сьогодні ${days[i]} у вас такі плани ${plans[i]}`);
  }*/

////////////////////////////5

/*let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
for(let i = 0;i<checkArr.length;i++){
    if(checkArr[i]<0){
        checkArr[i] =0;
    }
}
console.log(checkArr);*/


//////////////////////////////6

let planetName = prompt('Writing name planet sun system:')

switch(planetName){
    case'Mercury':
    case'Venus':
    case'Earth':
    case'Mars':
    case'Jupiter':
    case'Saturn':
    case'Uranus':
    case'Neptune':
    console.log(`${planetName} - it is planet.` );
    break;
    default:
        console.log(' - it is not planet.');
    
    
}