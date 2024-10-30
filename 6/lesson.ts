// array

// const someArray = [1, -6, false, '', [1, 2, 3]]
// someArray[5] = { name: 'Nikita' }
// someArray[7] = { name: 'Sergey' }
// console.log('index 0', someArray[0])
// console.log('index 2', someArray[2])
// console.log('index 4', someArray[4])
// console.log('index 4, index 2', someArray[4][2])
// console.log('index 5', someArray[5])
// console.log('index 6', someArray[6])
// console.log('index 7', someArray[7])
// console.log('length', someArray.length)


// types

// const a: Array<any> = []
// const b: any[] = [1, -6, false, '', [1, 2, 3]]
// const c: string[] = ['dsa', '', '  , ', 'ciyt']
// const d: [boolean, number, string] = [false, 1, '']

// interface SomeObjectFirst {
//     name: string
// }
// interface SomeObjectSecond {
//     data: [string, string]
// }
// const e: SomeObjectFirst[] = []
// const f: SomeObjectFirst[] = [{ name: 'Nikita' }, { name: 'Nikita' }, { name: 'Nikita' }]
// const g: SomeObjectSecond[] = [{ data: ['abc', 'dvc'] }, { data: ['abc', 'dvc'] }, { data: ['abc', 'dvc'] }]


// comparing arrays
// console.log('[]===[]', [] === []) // false
// console.log('[1,2,3,]===[1,2,3,]', [1, 2, 3,] === [1, 2, 3,]) // false

// const a = []
// const b = a
// console.log('a===b', a === b)


// property - static data

// 1. Array.length - represents the number of elements in that array
// [1,2,3,4,5].length === 5 but last index === 4 (0-4)


// methods - functions

// Array.at() - return element by index
// const a = [1, 2, 3, 4, 5, 6, 7]
// console.log(a.at(1)) // a[1]
// // get last element
// console.log(a[a.length - 1])
// console.log(a.at(-1))

// Array.forEach() - do function once for each array element by order
// return undefined
// const a = [1, 2, 3, 4, 5, 6, 7]
// a.forEach((item, index, array) => {
//     debugger
//     console.log(item)
// })

// Array.map() - do function once for each array element by order
// return new array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.map((item, index, array) => {
//     return item + 1
// })
// console.log(b)

// Array.filter() -  do function once for each array element by order
// and filtered this element
// return new filtered array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.filter((item, index, array) => {
//     return item > 3
// })
// console.log(b)

// Array.some() - tests whether at least one element
// in the array passes the test implemented by the provided function
// return boolean
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.some((item, index, array) => {
//     return item === 4
// })
// console.log(b)

// Array.find() - returns the first element in the provided array
// that satisfies the provided testing function
// return element or undefined
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.find((item, index, array) => {
//     return item === 4
// })
// const c = a.find((item, index, array) => {
//     return item === 100
// })
// console.log(b)
// console.log(c)

// Array.findLast() - the same as Array.find() but searching from last element

// Array.findIndex() - returns the index of the first element in an array
// that satisfies the provided testing function
// return index of element or -1
// const a = [{ name: 'Nikita' }, { name: 'Dima' }, { name: 'Kola' }, { name: 'Sergay' },]
// const b = a.findIndex((item, index, array) => {
//     if (item.name === 'Sergay') {
//         return true
//     }
// })
// console.log(b)

// Array.findLastIndex() - the same as Array.findIndex() but searching from last element

// Array.indexOf() - returns the first index at which a given element can be found in the array
// return index of element or -1
// const a = [1, 2, 3, 4, 2, 6, 2]
// const b = a.indexOf(2)
// const c = a.indexOf(2, 3)
// console.log(b)
// console.log(c)

// Array.lastIndexOf() - the same as Array.indexOf() but searching from last element

// Array.includes() - determines whether an array includes a certain value among its entries
// return boolean
const a = [1, 2, 3, 4, 2, 6, 2]
const b = a.includes(2)
const c = a.includes(9)
console.log(b)
console.log(c)
