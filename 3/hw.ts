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
