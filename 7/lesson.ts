// Array.indexOf() - returns the first index at which a given element can be found in the array
// return index of element or -1

// Array.concat() -  merge two or more arrays
// return new array
// const a = [1, 2, 3]
// const b = [7, 8, 9]
// const c = [4, 5, 6]
// const newArray = a.concat(b, c)
// console.log(newArray)

// Array.join() - creates and returns a new string by concatenating all of the elements
// in this array, separated by commas or a specified separator string
// return string
// const a = [1, 2, 3, 4, 2, 6, 2]
// console.log(a.join())
// console.log(a.join('_+'))

// Array.reverse() - reverses an array in place
// return link to primary array
// const a = [1, 2, 3, 4, 2, 6, 2]
// const b = a.reverse()
// console.log('a', a)
// console.log('b', b)
// console.log('a===b', a===b)


// Array.toReversed() - reversed order array
// return new array
// const a = [1, 2, 3, 4, 2, 6, 2]
// const b = a.toReversed()
// console.log('a', a)
// console.log('b', b)
// console.log('a===b', a===b)

// Array.sort() - sorts the elements of an array in place
// return link to primary array
// const a = [1, 2, 3, 4, 2, 6, 2]
// const b = a.sort((first, second) => {
//     if (first < second) {
//         return -1
//     } else if (first > second) {
//         return 1
//     }
// first === second
// return 0
// if first-second < 0 first will have less index than second
// if first-second === 0 do nothing
// if first-second > 0 second will have less index than first
// return first - second
// })
// console.log('a', a)
// console.log('b', b)
// console.log('a===b', a === b)

// Array.toSorted() - sorts the elements of an array
// return new Array
// const a = [1, 2, 3, 4, 2, 6, 2]
// const b = a.toSorted((first, second) => {
//     return first - second
// })
// console.log('a', a)
// console.log('b', b)
// console.log('a===b', a === b)

// Array.slice() - returns a copy of a portion of an array from start to end (end not included)
// The original array will not be modified
// return new array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.slice(0, 5)
// console.log('b', b)
// const c = a.slice(2, 5)
// console.log('c', c)

// Array.splice() - changes array by removing or replacing existing elements and/or
// adding new elements in place
// return array containing the deleted elements
// Array.splice(start, deleteCount, itemN)
// start - start index
// deleteCount - integer indicating the number of elements in the array to remove from start
// itemN - elements to add to the array, beginning from start
// const a = [1, 2, 3, 4, 5, 6, 7]

// const b = a.splice(1, 3)
// console.log('b', b)
// const c = a.splice(1, 0, null, null)
// console.log('c', c)
// const d = a.splice(1, 4, 1001)
// console.log('d', d)

// console.log('a', a)

// Array.toSpliced() - same splice, don't change primary massive
// return array that consists of all elements after splice
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.toSpliced(1, 3)
// console.log('a', a)
// console.log('b', b)

// Array.pop() - remove last element in place
// return removed element
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.pop()
// console.log('a', a)
// console.log('b', b)

// Array.push() - add elements to the end in place
// return - new length of array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.push(8)
// console.log('a', a)
// console.log('b', b)
// const c = a.push('Nikita', 18, 100)
// console.log('a', a)
// console.log('c', c)

// Array.shift() - removes first element from array in place
// return removed element
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.shift()
// console.log('a', a)
// console.log('b', b)

// Array.unshift() - add elements to the beginning in place
// return - new length of array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.unshift(8)
// console.log('a', a)
// console.log('b', b)
// const c = a.unshift('Nikita', 18, 100)
// console.log('a', a)
// console.log('c', c)

// Array.with() - change the value of a given index
// return new array
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = a.with(3, null)
// const c = a.with(-2, undefined)
// console.log('a', a)
// console.log('b', b)
// console.log('c', c)

// Array.reduce() - do function once for each array element by order with some accumulator
// return accumulator
// const initValue = 100
// const a = [1, 2, 3]
// const b = a.reduce((accumulator, currentValue, currentIndex, array)=>{
//     return accumulator+currentValue
// }, initValue)
// console.log(b)
// const c = a.reduce((accumulator, currentValue, currentIndex, array)=>{
//     debugger
//     return accumulator+currentValue
// })
// console.log(c)
// const d = a.reduce((accumulator, currentValue, currentIndex, array)=>{
//     return accumulator.concat([currentValue])
// }, [])
// console.log(d)

// Array.reduceRight() - the same as Array.indexOf() but work from left to right