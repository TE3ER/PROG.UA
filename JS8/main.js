window.onload = function () {
  //1) Створіть -елемент, наприклад, кнопку або div, і додайте подію click,
  //яка виводить повідомлення В середині елементу або поруч скільки разів ви клікнули

  let btn1 = document.querySelector("button");
  let clickCount = 0;

  function checkClick() {
    clickCount++;
    console.log(`Click - ${clickCount}`);
  }

  btn1.onclick = function () {
    btn1.classList.toggle("open");
    checkClick();
  };

  // 2) Створіть елемент (наприклад, div або input), і додайте обробник подій,
  //який виводить повідомлення про те, яка подія сталася (наприклад, 'mouseenter' чи 'mouseleave' і т.д).
  let inp1 = document.querySelector("input");
  inp1.addEventListener("mouseenter", function (event) {
    console.log("Мишка увійшла в елемент");
  });

  inp1.addEventListener("mouseleave", function (event) {
    console.log("Мишка покинула елемент");
  });

  inp1.addEventListener("click", function (event) {
    console.log("Мишка клацнула елемент");
  });

  //Створіть кнопку яка при кліку видаляє обробник подій з завдання №2
  let showMessagebtn = document.querySelector(".showMessage");
  function displayAlert() {
    alert(" + ");
  }
  showMessagebtn.addEventListener("click", displayAlert);
  let removeBtn = document.querySelector(".remove");
  removeBtn.addEventListener("mouseenter", function () {
    showMessagebtn.removeEventListener("mouseenter", displayAlert);
    alert("Done");
  });
  removeBtn.addEventListener("mouseleave", function () {
    showMessagebtn.removeEventListener("mouseleave", displayAlert);
    alert("Done");
  });
  removeBtn.addEventListener("click", function () {
    showMessagebtn.removeEventListener("click", displayAlert);
    alert("Done");
  });
};
/*Створіть картку товара де є блок з  значенням 0 і 2 кнопки + та -  
натискаючи на кнопку збільшувати 
або зменшувати значення, значення не може бути менше 0 */

var numZero = 0;
var divZero = document.querySelector(".zero");
var btnPlus = document.querySelector(".plus");
var btnMinus = document.querySelector(".minus");

function updateQuantityDisplay() {
  divZero.textContent = numZero;
}

btnPlus.addEventListener("click", function () {
  numZero++;
  updateQuantityDisplay();
});

btnMinus.addEventListener("click", function () {
  if (numZero > 0) {
    numZero--;
    updateQuantityDisplay();
  }
});
