'use strict'

//1. Напишіть функцію, яка приймає масив та використовує метод splice, щоб видалити 2 останніх елемента з масиву. Потім поверніть оновлений масив.
// let arr = [1, 2, 3, 4, 5];
// let deleteLastTwoItems = (arr) => arr.splice(3, 2);
// console.log('Оновлений масив: ' ,deleteLastTwoItems(arr));

//2. Напишіть функцію, яка приймає масив та використовує метод slice, щоб повернути новий масив, що містить перші три елементи вихідного масиву.
// const arr = [1, 2, 3, 4, 5];
// const getCopyArr = (arr) => arr.slice(0, 3);
// console.log('Основний масив: ', arr);
// console.log('Скопійований масив: ', getCopyArr(arr));

// 3. Напишіть функцію, яка приймає два масиви та використовує метод concat, щоб об'єднати їх у новий масив. Поверніть цей новий масив.
// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6];
// const getUnitedArray = (firstArray, secondArray) => firstArray.concat(secondArray);
// console.log(`Об'єднаний масив: ` ,getUnitedArray(firstArray, secondArray));

//4. Напишіть функцію, яка приймає масив та значення і використовує метод indexOf для пошуку першого входження значення у масиві. Поверніть індекс знайденого значення або -1, якщо воно не знайдене.
// const arr = [2, 1, 3, 1, 2, 7];
// function getFirstItem(arr, element){
//     return arr.indexOf(element)
// }
// console.log(getFirstItem(arr, 2));

//5. Напишіть функцію, яка приймає масив та значення і використовує метод includes для перевірки наявності значення у масиві. Поверніть true, якщо значення знайдено, або false, якщо воно не знайдене.
// const arr = [2, 1, 3, 1, 2, 7];
// const findValue = (arr, element) => arr.includes(element)
// console.log(findValue(arr, element));

//6. Напишіть функцію, яка приймає масив та значення і використовує метод find для пошуку першого елемента, який задовольняє умову, задану у функції-перевірці (callback). [5, 12, 8, 130, 44]. Умова: перший елемент, який більше 10.
// const arr = [5, 12, 8, 130, 44];
// let getFirstElementBiggerThenTen = (arr) => arr.find(el => el > 10);
// console.log(getFirstElementBiggerThenTen(arr));

//7. Напишіть функцію, яка приймає масив та значення і використовує метод filter для створення нового масиву, що містить елементи, які задовольняють умову, задану у функції-перевірці (callback). Поверніть цей новий масив. [5, 12, 8, 130, 44]. Умова: всі елементи, які більше 10.
// const arr = [5, 12, 8, 130, 44];
// let getNewArr = (arr) => arr.filter(el => el > 10);
// console.log(getNewArr(arr));

//8. Напишіть функцію, яка приймає масив та значення і використовує метод findIndex для пошуку індексу першого елемента, який задовольняє умову, задану у функції-перевірці (callback). Поверніть індекс знайденого елемента або -1, якщо він не знайдений.
// const arr = [5, 12, 8, 130, 44];
// let getIndexOfItem = (arr, element) => arr.findIndex((el) => el === element);
// console.log(getIndexOfItem(arr, 130));

//9. Напишіть функцію, яка приймає масив і використовує метод forEach. Якщо елемент парний - помножте на 2, якщо не парний - на 3
// const arr = [1, 2, 3, 4, 5, 6];
// let multiplyEvenElement = (arr) => arr.map((el) => (el / 2 === 0) ? el * 2 : el * 3);
// console.log(multiplyEvenElement(arr));

//10. Напишіть функцію, яка приймає масив і використовує метод map для створення нового масиву. В кожного елементу взяти квадратний корінь і округлити числа до двох знаків після коми.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const getSqrt = (arr) => arr.map((el) => Math.sqrt(el).toFixed(2));
// console.log(getSqrt(arr));

//11. Напишіть функцію, яка приймає масив чисел і використовує метод sort для сортування чисел у порядку зростання. Поверніть оновлений масив. [5, 3, 1, 4, 2]
// let arr = [5, 3, 1, 4, 2];
// const getSortedArr = (arr) => arr.sort((a, b) => a - b)
// console.log(getSortedArr(arr));

//12. Напишіть функцію, яка приймає масив і використовує метод reverse для оберненого порядку елементів у масиві. Поверніть оновлений масив.
// const arr = [1, 2, 3, 4, 5];
// let getReverseArr = (arr) => arr.reverse();
// console.log(`Початковий масив: ` ,arr);
// console.log(`Перетворений масив: ` ,getReverseArr(arr));

//13. Напишіть функцію, яка приймає рядок та роздільник і використовує метод split для розбиття рядка на масив підстрок за допомогою заданого роздільника. Поверніть цей масив.
// let doArrFromString = (string, element) => string.split(element);
// console.log(doArrFromString('Вася Петя Лена', ' '));

//14. Напишіть функцію, яка приймає масив рядків та роздільник і використовує метод join для об'єднання елементів масиву в один рядок за допомогою заданого роздільника. Поверніть цей рядок.
// const arr = ['Вася', 'Петя', 'Маша'];
// let makeStringFromArr = (array, element) => array.join(element);
// console.log(makeStringFromArr(arr, '; '));

//15. Напишіть функцію, яка приймає аргумент і використовує метод Array.isArray для перевірки, чи є цей аргумент масивом. Поверніть true, якщо це масив, або false, якщо це не масив.
// let arr = [2];
// let isArray = (arr) => Array.isArray(arr);
// console.log(isArray(arr));

//16. Напишіть функцію, яка приймає масив чисел та використовує метод reduce для обчислення суми всіх чисел у масиві. Поверніть цю суму.
// const arr = [1, 2, 3, 4, 5];
// let sumOfArr = (arr) => arr.reduce((sum, current) => sum + current);
// console.log(sumOfArr(arr));

//17. Напишіть функцію, яка приймає масив та функцію-перевірку (callback) і використовує метод some для перевірки, чи задовольняє хоча б один елемент масиву умову, задану функцією-перевіркою. Поверніть true, якщо умова виконується хоча б для одного елемента, або false, якщо ні. [1, 2, 3, 4, 5]. element > 3. element > 10

// const arr = [1, 2, 3, 4, 5];
// let callback = (element) => element > 4;
// function ifOnlyOne(arr, callback){
//    return arr.some(callback)
// }

// console.log(ifOnlyOne(arr, callback));

//18. Напишіть функцію, яка приймає масив та функцію-перевірку (callback) і використовує метод every для перевірки, чи задовольняють всі елементи масиву умову, задану функцією-перевіркою. Поверніть true, якщо умова виконується для всіх елементів, або false, якщо ні. [1, 2, 3, 4, 5]. element > 0. element > 3

const arr = [1, 2, 3, 4, 5];
const callback = (element) => element > 1;
const ifEveryelem = (arr, callback) => arr.every(callback);
console.log(ifEveryelem(arr, callback));  

