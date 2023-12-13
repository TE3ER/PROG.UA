//Створіть функцію, яка приймає рядок і повертає true, 
//якщо він є коректною електронною поштою, і false в іншому випадку.
function TorFemail() {
  let regTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let finaly = regTest.test(strEmail);
  return console.log(finaly);
}
let strEmail = "rost8564@gmail.com";
TorFemail(strEmail);

//Створіть функцію для перевірки пароля. Пароль повинен містити щонайменше 8 символів, 
//включаючи принаймні одну цифру, одну велику і одну малу літеру.

function TorFpassword(pass) {
    let regTest1 = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    let finaly1 = regTest1.test(pass);
    return console.log(finaly1);
  }
  let strPass = "Rostikkk9879";
  TorFpassword(strPass);


// Створіть функцію яка перевіряє чи дата в 
//такому форматі 21-12-1999. Якщо так вивести true якщо ні false


function TorFyear(year) {
    let regTest2 = /^(0[1-9]|[1-2][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    let finaly2 = regTest2.test(year);
    return console.log(finaly2);
  }
  let strYear = "13-07-2023";
  TorFyear(strYear);