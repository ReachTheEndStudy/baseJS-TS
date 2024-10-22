// console.log(1)
// function nameSome (): void{
//     console.log(2)
// }
// console.log(3)
// nameSome()
// console.log(4)

// function nameSome (){
//     return 10
// }
// const a = nameSome()
// console.log(a)

// function nameSome (name: string, age: number, city: string = 'Spb'): string{
//     return `${name}, ${age}, ${city}`
// }
// const a = nameSome('Nikita', 18)
// console.log(a)

// const soneFunc = (name: string, age: number): string=>{
//     return `${name}, ${age}`
// }
// const a = soneFunc('Nikita', 18)
// console.log(a)

const soneFunc = (name: string, age: number): string => `${name}, ${age}`

const a = soneFunc('Nikita', 19)
console.log(a)