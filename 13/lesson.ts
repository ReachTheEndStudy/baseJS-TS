// Spread


// array

// const someArr = [1, 2, 3]
// const newArr = [...someArr]
// console.log('newArr', newArr)
// console.log('someArr', someArr)
// console.log(newArr === someArr)


// object

// const someObj = {
//     someArr: [1, 2, 3]
// }

// const newObj = { ...someObj }

// console.log(newObj === someObj)
// console.log(newObj.someArr === someObj.someArr)

// const newObj = { ...someObj, name: 'Nikita' }
// console.log(newObj)

// const newObj = { ...someObj, someArr: [...someObj.someArr] }
// console.log(newObj === someObj)
// console.log(newObj.someArr === someObj.someArr)


// function
// const someArr = [1, 2, 3]
// const someFunc = (a, b, c, d) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// someFunc(...someArr)



// Destructuring assignment


// object
//
// const someObj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
// }

// const { a, b, c, ...somaKey } = someObj

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(somaKey)
// console.log(someObj)


//array

// const someArr = [1, 2, 3, 4, 5]

// const [age, city, ...other] = someArr

// console.log(age)
// console.log(city)
// console.log(other)

// const [age, , city, ...other] = someArr

// console.log(age)
// console.log(city)
// console.log(other)
// console.log(someArr)

// const [a, b] = []

// console.log(a)
// console.log(b)