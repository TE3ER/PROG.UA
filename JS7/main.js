

//створіть розмітку яка відповідає таким селекторам
let autoplay = document.querySelector('[autoplay]');
let elements = document.querySelectorAll('div, p');
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');

console.log(autoplay);
console.log(elements);
console.log(listItems);
console.log(listItem);

/*Створіть новий елемент div за допомогою createElement. Додайте його до існуючого елемента в DOM, 
використовуючи appendChild. Присвойте створеному елементу текстовий вміст із текстом JavaScript.*/
let newDiv = document.createElement('div');
let textDiv = document.createTextNode('New text');
newDiv.appendChild(textDiv);
newDiv.text = 'JavaScript';


/*-Створіть кнопку в HTML. Напишіть функцію JavaScript, яка видаляє цю кнопку з DOM, використовуючи remove.*/
let Button =  document.querySelector('button');

function removeElement(button){
    return button.remove()
}
removeElement(Button);

//  Створіть HTML з декількома елементами, розташованими один поруч з іншим. 
//  Знайдіть елемент і додайте класс(selected)  і текст до його та наступного та попереднього сусіда, використовуючи nextElementSibling та prevElementSibling.
//  +
//  Створіть HTML з елементом, якому присвоено клас. Змініть текстовий вміст цього елемента, використовуючи innerHTML. Потім додайте ще один клас до цього елемента, використовуючи classList.
let a = document.querySelector('#selectedElement');

console.log(a);
a.classList = "selected";

if (a.previousElementSibling) {
  a.previousElementSibling.innerText = '11111111111111';
}

a.innerText = '22222222222222222';

if (a.nextElementSibling) {
  a.nextElementSibling.innerText = '3333333333333333333333';

}

//