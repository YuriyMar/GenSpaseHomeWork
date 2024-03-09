// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let a = 0;
// if (a > 0) {
//     console.log(true);
// } else if (a < 0) {
//     console.log(false);
// }
// else {
//     console.log("Не визначено");
// }
/* при a = 1 буде true, при a = -3 буде false, при  a = 0 буде  "Не визначено" */

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let test = "qwerty";
// let value;
// switch (test) {
//     case 'test': value = true;
//         break;

//     default: value = "Not True"
//         break;
// }
// console.log(value);


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//let test = 13;
//console.log((test > 10) ? test - 5 : (test < 10) ? test + 5 : "дорівнює 10");
/*при test = 1 log = 6
  при test = 10 log = "дорівнює 10"
  при test = 10 log = 8
*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const test = Number(prompt("Введіть число від 1 до 12"));
// let nameMonth;
// switch (test) {
//     case 1: nameMonth = "January"; break;
//     case 2: nameMonth = "February"; break;
//     case 3: nameMonth = "March"; break;
//     case 4: nameMonth = "April"; break;
//     case 5: nameMonth = "May"; break;
//     case 6: nameMonth = "June"; break;
//     case 7: nameMonth = "July"; break;
//     case 8: nameMonth = "August"; break;
//     case 9: nameMonth = "September"; break;
//     case 10: nameMonth = "October"; break;
//     case 11: nameMonth = "November"; break;
//     case 12: nameMonth = "December"; break;

//     default: alert(" Введіть число від 1 до 12 !!! ");
//         break;
// }
// if (test >= 1 && test <= 12) {
//     alert(nameMonth);
// }



//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел


// let inputNumber = prompt("Введіть тризначне число:");

// if (inputNumber.length !== 3 || isNaN(inputNumber)) {
//     alert("Будь ласка, введіть коректне тризначне число!");
// } else {

//     let firstDigit = parseInt(inputNumber.charAt(0));
//     let secondDigit = parseInt(inputNumber.charAt(1));
//     let thirdDigit = parseInt(inputNumber.charAt(2));

//     let sum = firstDigit + secondDigit + thirdDigit;
//     alert("Сума цифр у введеному числі " + inputNumber + " дорівнює " + sum);
// }

