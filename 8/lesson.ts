// string

// const a = 'dsad'
// const b = "23123"
// const c = '123,   "23123"'
// const d = `321321 ${100+100}`
// console.log('a', a)
// console.log('b', b)
// console.log('c', c)
// console.log('d', d)

// const myName = 'Nikita'
// console.log(1, myName[0])
// console.log(2, myName[1])
// console.log(3, myName[2])

// myName[0] = 'K'
// myName[1] = 'P'
// myName[2] = '1'
// console.log(1, myName[0])
// console.log(2, myName[1])
// console.log(3, myName[2])


// comparing string and  UTF-16
// console.log('a>b', 'a' > 'b') // a = 97, b = 98
// console.log('a>B', 'a' > 'B') // B = 66
// console.log('aBrikos>Abrikos', 'aBrikos' > 'Abrikos') // A = 66

// const a = ['a', 'b', 'c', 'd']
// a.sort((a, b) => a > b ? -1 : 1)
// console.log(a)

// property - static data

// 1. String.length - represents the number of elements in that array
// 'Nikita'.length === 6 but last index === 5 (0-5)


// methods - functions

// String.toString() - returns a string representing this value
// return new string
// const a = 12
// const b = 0
// const c = -99.22
// console.log('12', a.toString())
// console.log('0', b.toString())
// console.log('-99.22', c.toString())

// String.split() - takes a pattern and divides this string into an array
// return array
// const a = '12, 13, 14_Nikita_Dima'
// console.log(a.split(','))
// console.log(a.split('_'))

// String.toLowerCase() - converted to lower case
// return new string
// const a = 'NIkiTA'
// console.log(a.toLowerCase())


// String.toUpperCase() - converted to upper case
// return new string
// const a = 'NIkiTA'
// console.log(a.toUpperCase())

// String.trim() - removes whitespace from both ends of this string
// return new string
// const a = '              NIkiTA            '
// console.log(a)
// console.log(a.trim())

// String.startsWith() - values determines whether this
// string begins with the characters of a specified string
// return boolean
// const a = 'NIkiTA'
// console.log(a.startsWith('NIk'))
// console.log(a.startsWith('Ik'))

// String.endsWith() - values determines whether this
// string ends with the characters of a specified string
// return boolean
// const a = 'NIkiTA'
// console.log(a.endsWith('iTA'))
// console.log(a.endsWith('ta'))

// String.includes() - search to determine whether a given string may
// be found within this string
// return boolean
// const a = 'The quick brown fox jumps over the lazy dog.'
// console.log(a.includes('ck b'))
// console.log(a.includes(' zy dog'))

// String.repeat() - specified number of copies of this string
// return new string
// const a = 'Ha'
// console.log(a.repeat(3))

// String.replace() - replaced first matches value
// return new string
// const a = "Nikita"
// console.log(a.replace('i', 'A'))

// String.replaceAll() - replaced all matches value
// return new string
// const a = "Nikita"
// console.log(a.replaceAll('i', 'A'))
