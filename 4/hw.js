/*
скрипт: Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

Теория:
1. https://learn.javascript.ru/operators
2. https://learn.javascript.ru/comparison
3. https://learn.javascript.ru/ifelse
4. https://learn.javascript.ru/while-for#tsikl-for
5. https://doka.guide/js/if-else/
6. https://doka.guide/js/for/


Практика:
1.  Создать функцию, которая на вход принимает массив чисел.
Необходимо вывести в консоль каждое четное число

2. Создать функцию, которая на вход принимает массив чисел.
Необходимо вернуть самое большое число

3. Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
Необходимо вывести в консоль каждое четное число, кроме третьего и пятого.
Сделать две реализации с if и с continue.

4. Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
Необходимо вывести в консоль все числа до пятой ячейки.
Сделать две реализации с if, с break.

5. Создать функцию, которая на вход принимает массив чисел.
Необходимо вернуть сумму чисел массива

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Создать функцию, которая на вход принимает массив чисел.
// Необходимо вывести в консоль каждое четное число
// const consoleEveryEvenNumber = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }
// consoleEveryEvenNumber(testArr)
// Создать функцию, которая на вход принимает массив чисел.
// Необходимо вернуть самое большое число
// const getMaxNumberFromArray = (arr: number[]): number =>{
//     let max = arr[0]
//     for(let i = 1; i <arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(getMaxNumberFromArray(testArr))
// Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
// Необходимо вывести в консоль каждое четное число, кроме третьего и пятого.
// Сделать две реализации с if и с continue.
// const consoleEveryEvenNumber = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 2) {
//             continue
//         } else if (i === 4) {
//             continue
//         } 
//             if (arr[i] % 2 === 0) {
//                 console.log(arr[i])
//             }
//     }
// }
// consoleEveryEvenNumber(testArr)
// Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
// Необходимо вывести в консоль все числа до пятой ячейки.
// Сделать две реализации с if, с break.
// const consoleEveryNumberWithoutMoreThanFiveIndex = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i >= 5) {
//             break
//         }
//         console.log(arr[i])
//     }
// }
// consoleEveryNumberWithoutMoreThanFiveIndex(testArr)
// 5. Создать функцию, которая на вход принимает массив чисел.
// Необходимо вернуть сумму чисел массива
var sumArray = function (arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(sumArray(testArr));
