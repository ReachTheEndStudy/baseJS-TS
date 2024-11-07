// string

// String.at() - return letter by index
// return letter or undefined
// const a = 'Nikita'
// console.log('-1', a.at(-1))
// console.log('-2', a.at(2))
// console.log('-20', a.at(20))

// String.charAt() - return letter by index
// return letter or empty string
// const a = 'Nikita'
// console.log('length - 1', a.charAt(a.length - 1))
// console.log('-1', a.charAt(-1))
// console.log('-2', a.charAt(2))
// console.log('-20', a.charAt(20))

// String.charCodeAt() - returns an integer between 0 and 65535
// representing the UTF-16 code unit at the given index
// return number
// console.log('a', 'a'.charCodeAt(0))
// console.log('c', 'c'.charCodeAt(0))
// console.log('A', 'A'.charCodeAt(0))
// console.log('C', 'C'.charCodeAt(0))

// String.fromCharCode() - returns a string created from
// the specified sequence of UTF-16 code units.
// return string
// console.log('(97, 65)', String.fromCharCode(97, 65))
// console.log('(6500,8212, 3000)', String.fromCharCode(6500,8212, 3000))

// String.indexOf() - searches this string and returns the index
// of the first occurrence of the specified substring
// return number
// const a = "I think Ruth's dog is cuter than your dog!"
// console.log('dog', a.indexOf('dog'))
// console.log('dog21', a.indexOf('dog21'))

// String.lastIndexOf()
// return number
// const a = "I think Ruth's dog is cuter than your dog!"
// console.log('dog', a.lastIndexOf('dog'))
// console.log('dog21', a.lastIndexOf('dog21'))

// String.padStart() - pads this string with another string (multiple times, if needed)
// until the resulting string reaches the given length by start
// return string
// const a = 'Nikita'
// console.log('1', a.padStart(1))
// console.log('10', a.padStart(10, ''))
// console.log('10', a.padStart(10))
// console.log('20', a.padStart(20, '1'))

// String.padEnd() - pads this string with another string (multiple times, if needed)
// until the resulting string reaches the given length by end
// return string
// const a = 'Nikita'
// console.log('1', a.padEnd(1))
// console.log('10', a.padEnd(10, ''))
// console.log('10', a.padEnd(10))
// console.log('20', a.padEnd(20, '1'))

// String.slice() - extracts a section of this string
// return string
// const a = 'The quick brown fox jumps over the lazy dog.'
// console.log('(31)', a.slice(31))
// console.log('(4, 19)', a.slice(4, 19))
// console.log('(-4)', a.slice(-4))
// console.log('(-9, -5)', a.slice(-9, -5))