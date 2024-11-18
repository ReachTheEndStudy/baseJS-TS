// object


// const someObj = {
//     // key - name, value - "Nikita" -> property
//     name: 'Nikita',
//     // key - age, value - 80 -> property
//     age: 80,
//     // key - sayHello, value - function -> method
//     sayHello() {
//         console.log('hello')
//     }
// }

// console.log('name', someObj['name'])
// console.log('age', someObj['age'])
// console.log('name', someObj.name)
// console.log('age', someObj.age)
// someObj.sayHello()
// console.log('city', someObj.city)


// add and remove properties and methods

// someObj.city = 'russia'
// console.log(someObj.city)

// someObj.sayA = function(){
//     console.log('A')
// }
// someObj.sayA()

// delete someObj.name
// console.log('name', someObj.name)

// const key = 'AAA'
// someObj[key] = 120
// console.log('key', someObj[key])
// console.log('AAA', someObj.AAA)


// this

// const someObj = {
//     name: 'Nikita',
//     age: 80,
//     sayHello(friendName) {
//         this.name = 12
//         console.log(`Hello ${friendName} from ${this.name}`)
//     }
// }

// someObj.sayHello('Dima')

// console.log(someObj.name)


// in for..in

// const someObj = {
//     name: 'Nikita',
//     age: 80,
//     sayHello(friendName) {
//         console.log(`Hello ${friendName} from ${this.name}`)
//     }
// }

// console.log("'name' in someObj", 'name' in someObj)
// console.log("'city' in someObj", 'city' in someObj)

// console.log("someObj.name", !!someObj.name)
// console.log("someObj.city", !!someObj.city)


// for (let key in someObj) {
//     console.log('key', key)
//     console.log('value', someObj[key])

//     if (key === 'sayHello') {
//         someObj[key]('Dima')
//     }
// }


// comparing objects
// console.log('{}==={}', {} === {})
// console.log(
//     '{name: "Nikita"}==={name: "Nikita"}',
//     { name: "Nikita" } === { name: "Nikita" }
// )

// const a = {}
// const b = a
// console.log('a===b', a === b)


// types

// interface SomeObjType {
//     name: string;
//     age: number;
//     sayHello: (friendName: string) => number
//     myFriends: { name: string, age: number}[]
// }

// type SomeObjType = {
//     name: string;
//     age: number;
//     sayHello: (friendName: string) => number
//     myFriends: { name: string, age: number }[]
// }

// type NameType = 'Nikita' | 'Dima'

// type SomeObjStaticType = {
//     name: NameType;
//     age: number;
//     myFriends: { name: string, age: number }[]
// } 

// type SomeObjDynamicType = {
//     sayHello: (friendName: string) => number
// } 



// const someObj: SomeObjStaticType & SomeObjDynamicType = {
//     name: 'Dima',
//     age: 80,
//     sayHello(friendName: string): number {
//         console.log(`Hello ${friendName} from ${this.name}`)
//         return 11
//     },
//     myFriends: [
//         { name: 'Denis', age: 91 },
//         { name: 'Igor', age: 90 },
//         { name: 'Arkadii', age: 89 },
//     ]
// }
