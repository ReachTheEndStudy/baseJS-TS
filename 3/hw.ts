/*
скрипт: Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

Теория:
1. https://learn.javascript.ru/function-basics
2. https://learn.javascript.ru/arrow-functions-basics
3. https://doka.guide/js/function/
4. https://doka.guide/js/var-let/
5. https://doka.guide/js/object/
6. https://learn.javascript.ru/object


Практика:
1. Создать функцию х, у которой есть два параметра. Первый параметр name: string,
второй параметр необязательный age: number. В теле функции по очереди выводим в консоль оба
параметра. Вызываем функцию дважды, в первый раз передаем все аргументы, во второй только обязательные.

2. Создать функцию y, которая выводит в консоль единственный параметр и после возвращает его. Создаем
переменную z и присваиваем ей результат выполнения функции y. Выводим в консоль переменную z.

3. Делаем пункт 1 и 2 с помощью написания двух вариантов создания функции. С помощью ключевого
слова function и с помощью присваивания анонимной стрелочной функции. Типизируем функции.

4. Необходимо реализовать объекты в соответствие с описанными типами и интерфейсами:
interface IList {
    data: number[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getData: (data: number[]) => number[]
}
interface IUser {
    name: string;
    age: number;
    sayHello: (name: string) => void;
    isAdult: (age: number) => boolean;
}
type TaskType = {
    id: string;
    filter: string;
    isDone: boolean;
    seiIsDOne: () => void
    setFilter: (filter: string) => void
}
*/



const x = (name: string, age?: number): void => {
    console.log(name)
    console.log(age)
}

function xx(name: string, age?: number): void {
    console.log(name)
    console.log(age)
}

x('Nikita', 16)
x('Dima')

const y = (somePar: any): any => {
    console.log(somePar)
    return somePar
}
function yy(somePar: any): any {
    console.log(somePar)
    return somePar
}

const z = y(99)
console.log(z)

interface IList {
    data: number[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getData: (data: number[]) => number[]
}

const list: IList = {
    data: [1, 2, 3, 4, 5,],
    isOpen: false,
    setIsOpen(isOpen: boolean) {
        this.isOpen = isOpen
    },
    getData(data: number[]) {
        return data
    },
}




interface IUser {
    name: string;
    age: number;
    sayHello: (name: string) => void;
    isAdult: (age: number) => boolean;
}

const user: IUser = {
    name: "Nikita",
    age: 15,
    sayHello(name: string) {
        console.log(`Hello ${name}`)
    },
    isAdult(age: number) {
        console.log('no')
        return false
    }
}

type TaskType = {
    id: string;
    filter: string;
    isDone: boolean;
    seiIsDOne: () => void
    setFilter: (filter: string) => void
}

const task: TaskType = {
    id: 'a',
    filter: 'done',
    isDone: true,
    seiIsDOne() {
        this.isDone = true
    },
    setFilter(filter: string) {
        console.log(filter)
    }
}