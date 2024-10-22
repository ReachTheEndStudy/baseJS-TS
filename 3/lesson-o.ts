// const a = [1, 2, false]
// a[0]

interface ISomeObj {
    name: string
    sayHello: () => void
    data: {
        name: string
    }
    arr: any[]
}

type SomeObjType = {
    name: string
    sayHello: () => void
    data: {
        name: string
    }
    arr: any[]
}

const someObj: SomeObjType = {
    name: 'Nikita',
    sayHello() {
        console.log(`Hello ${this.name}`)
    },
    data: {
        name: 'Nikita'
    },
    arr: [1, 2, 3,],
}

console.log(someObj.sayHello())

const a = [1, 2, 3, 4,].length
console.log(a)
