//Створіть функцію конструктор filmMaker
//яка створює обєкт з ключами filmName,  yearProduction,  rating .
//створити 5 обєктів і розмістити в масиві films
/*function filmMaker(filmName, yearProduction, rating){
this.filmName = filmName;
this.yearProduction = yearProduction;
this.rating = rating;
};

const films = [
    new filmMaker('film1',2019,6),
    new filmMaker('film2',2013,9),
    new filmMaker('film3',2023,7),
    new filmMaker('film4',2015,5),
    new filmMaker('film5',2021,10)
];
*/

// Створити функцію яка сортує
//фільми за ріком випуска і повертає новий массив
/*films.sort(function(a,b){
return a.yearProduction - b.yearProduction;
});
console.log(films);*/

//Створіть новий массив з const strings = ["apple", "banana", "orange"];
//в якому всі значення в верхньому регістрі

/*const strings = ["apple", "banana", "orange"];
let UpperString = strings.map(function(name) {
    return name.toUpperCase();
  });
  
  console.log(UpperString);*/

//Створіть масив рядків і використовуйте forEach, щоб вивести кожен рядок в консоль
// після перетворення його в нижній регістр.
/*const words = ["JavaScript", "HTML", "CSS"];
words.forEach(function (name) {
  const lowerWords = name.toLowerCase();
  console.log(lowerWords);
});*/

// Створіть масив чисел. Використовуйте filter, щоб відфільтрувати та залишити тільки парні числа. Потім використовуйте sort, щоб впорядкувати їх в зростаючому порядку.
const numbers = [5, 2, 8, 1, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); 
