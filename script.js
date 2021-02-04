// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let greet = 'hello';
let school = 'owu';
let domen = 'com';
let country = 'ua';
let one = 1;
let ten = 10;
let negativeNumber = -999;
let randomNumber = 123;
let pi = 3.14;
let e = 2.7;
let number = 16;
let boolenTrue = true;
let boolenFalse = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(greet);
alert(greet);
document.write(greet + '<br/>');

console.log(school);
//alert(school);
document.write(school + '<br/>');

console.log(domen);
//alert(domen);
document.write(domen + '<br/>');

console.log(country);
//alert(country);
document.write(country + '<br/>');

console.log(one);
//alert(one);
document.write(one + '<br/>');

console.log(ten);
//alert(ten);
document.write(ten + '<br/>');

console.log(negativeNumber);
//alert(negativeNumber);
document.write(negativeNumber + '<br/>');

console.log(randomNumber);
//alert(randomNumber);
document.write(randomNumber + '<br/>');

console.log(pi);
//alert(pi);
document.write(pi + '<br/>');

console.log(e);
//alert(e);
document.write(e + '<br/>');

console.log(number);
//alert(number);
document.write(number + '<br/>');

console.log(boolenTrue);
//alert(boolenTrue);
document.write(boolenTrue + '<br/>');

console.log(boolenFalse);
//lert(boolenFalse);
document.write(boolenFalse + '<br/>');

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

greet = 'hi';
school = 'oxford';
domen = 'org';
country = 'usa';
one = 'one';
ten = 'ten';
negativeNumber = -888;
randomNumber = 321;
pi = 3.1415;
e = 2.718;
number = 42;
boolenTrue = 'positive';
boolenFalse = 'negative';

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(greet);
alert(greet);
document.write(greet + '<br/>');

console.log(school);
//alert(school);
document.write(school + '<br/>');

console.log(domen);
//alert(domen);
document.write(domen + '<br/>');

console.log(country);
//alert(country);
document.write(country + '<br/>');

console.log(one);
//alert(one);
document.write(one + '<br/>');

console.log(ten);
//alert(ten);
document.write(ten + '<br/>');

console.log(negativeNumber);
//alert(negativeNumber);
document.write(negativeNumber + '<br/>');

console.log(randomNumber);
//alert(randomNumber);
document.write(randomNumber + '<br/>');

console.log(pi);
//alert(pi);
document.write(pi + '<br/>');

console.log(e);
//alert(e);
document.write(e + '<br/>');

console.log(number);
//alert(number);
document.write(number + '<br/>');

console.log(boolenTrue);
//alert(boolenTrue);
document.write(boolenTrue + '<br/>');

console.log(boolenFalse);
//alert(boolenFalse);
document.write(boolenFalse + '<br/>');


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

let firstName = prompt('Enter you name', 'Volodymyr');
let middleName = prompt('Enter you middle name', 'Ihorovych');
let age = prompt('Enter you age', '26');

//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.`);
document.write(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.` + '<br/>');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let person = firstName + ' ' + middleName;
console.log(person);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let firstNumber = prompt('Enter first number', '3');
let secondNumber = prompt('Enter second number', '6');
let thirdNumber = prompt('Enter third number', '8');

console.log(+firstNumber);
console.log(+secondNumber);
console.log(+thirdNumber);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let fourthNumber = prompt('Enter fourth number', '11');

let sum = (parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber) + parseInt(fourthNumber));
console.log(sum);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

let floatFirstNumber = prompt('Enter first float number', '3.4');
let floatSecondNumber = prompt('Enter second float number', '7.3');
let floatThirdNumber = prompt('Enter third float number', '5.6');
console.log(floatFirstNumber, floatSecondNumber, floatThirdNumber);

let result = parseFloat(floatFirstNumber) + parseFloat(floatSecondNumber) + parseFloat(floatThirdNumber);
console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

result = Math.round(floatFirstNumber) + Math.round(floatSecondNumber) + Math.round(floatThirdNumber);
console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

firstNumber = prompt('Enter base number', '3');
secondNumber = prompt('Enter exponent number', '3');

console.log(Math.pow(firstNumber, secondNumber));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof(a), typeof(b), typeof(c));

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
5 < 6 /* -> true */
5 > 6 /* -> false */
5 === 6 /* -> false */
5 >= 6 /* -> false */
10 === 10 /* -> true */
10 <= 10 /* -> true */
10 > 10 /* -> false */
10 !== 10 /* -> false */
10 < 10 /* -> false */
123 === '123' /* -> false */
123 == '123' /* -> true */

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 );-
//   console.log(34 > 33 && 23 < 90 ); +
//   console.log(99 > 100 && 45 > 12 ); -
//   console.log(132 > 100 || 45 < 12 ); +
//   console.log(111 > 11 || 45 < 111 ); +
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); +
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); +
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); -
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); +
//   console.log(!!'-1'); +
//   console.log(!!-1); +
//   console.log(!!'0'); +
//   console.log(!!'null'); +
//   console.log(!!'undefined'); +
//   console.log(!!(3/'owu')); -
//   console.log((111 > 11 || 45 < 111) ||  !!'0'); +
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -


// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));


// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори. 
//     Example: 88 = (16 / 2) * 11

let a1, a2, a3, a4, a5;
a1 = (15 * 2) + 4;
a2 = (24 / 4) * 2
a3 = 11 + (11 * 5)
a4 = (5 * 9) + ((5 * 4) + (5 ** 2))
a5 = 6 + (9 * 9)

console.log(a1, a2, a3, a4, a5);


// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6, a7, a8, a9, a10;

a6 = 5 % 3;
a7 = 3 % 5
a8 = 5 + '3'
a9 = '5' - 3
a10 = 75 + 'кг'

console.log(a6, a7, a8, a9, a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = height * width;

console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
// pi оголошено на початку.
let v = pi * ((dC / 2) ** 2) * heightC;

console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;

let k = Math.sqrt((n ** 2) + (m ** 2));

console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

let str2 = "Hello world";

console.log(str2);
//alert(str2);
document.write(str2 + '<br/>');

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

let name2 = 'Kharyna Volodymyr';
let age2 = 27;
let hobby = "programming";

alert(name2 + '\n' + age2 + '\n' + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str3 = 'Кто ';
let str4 = 'ты ';
let str5 = 'такой?';

let concatenation = str3 + str4 + str5;
document.write(concatenation + '<br/>');


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); // = 205
//      document.write(str - a + "<br/>");  // = 15
//      document.write(str * "2" + "<br/>"); // = 40
//      document.write(str / 2 + "<br/>");  // = 10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") // = 3
//     parseInt("-7.875") // = -7
//     parseInt("435") // = 435
//     parseInt("Вася") // = NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

let str6 = prompt("Enter something", "ho-ho")
console.log(str6);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let resultAlert = alert('result = ' + (+firstNumber) + (+secondNumber)); // оголошені вище

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let congratulations = alert(`Доброго вечера ${firstName} ${middleName}, мои поздравления что вам ${age}`);

// =====================
// ======ДОП============
// =====================


// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let n1 = +prompt('Enter first number', '3');
let n2 = +prompt('Enter second number', '6');
let n3 = +prompt('Enter third number', '8');

if ((n1 <= n2) && (n2 < n3)) {
    console.log(n1, n2, n3);
} else if ((n1 < n3) && (n3 <= n2)) {
    console.log(n1, n3, n2);
} else if ((n2 < n1) && (n1 < n3)) {
    console.log(n2, n1, n3);
} else if ((n2 < n3) && (n3 < n1)) {
    console.log(n2, n3, n1);
} else if ((n3 < n1) && (n1 < n2)) {
    console.log(n3, n1, n2);
} else {
    console.log(n3, n2, n1);
}

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLights = prompt('Яке світло на світлофорі?', 'red');

if (trafficLights === 'green') {
    console.log('иди');
} else if (trafficLights === 'yellow') {
    console.log('подожди');
} else if (trafficLights === 'red') {
    console.log('стой');
} else {
    console.log('делай что хочешь!');
}

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let isRoadClear = confirm('Машини є на дорозі?');

if ((trafficLights === 'green') && (isRoadClear == false)) {
    console.log('иди');
} else if ((trafficLights === 'green') && (isRoadClear == true)) {
    console.log('подожди пока нарушители проедут');
} else if ((trafficLights === 'yellow') && (isRoadClear == true)) {
    console.log('Жди');
} else if ((trafficLights === 'yellow') && (isRoadClear == false)) {
    console.log('все рано жди');
} else if ((trafficLights === 'red') && (isRoadClear == false)) {
    console.log('стой все рано');
} else if ((trafficLights === 'red') && (isRoadClear == true)) {
    console.log('стой и жди');
} else {
    console.log('делай что хочешь!');
}