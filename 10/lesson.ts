// number

// const a = 1
// const b = 0
// const c = -12.34
// const d = NaN // not a number
// const e = Infinity
// const f = -Infinity
// console.log('Infinity', 1/0)


// primitive values to number
// console.log('null', Number(null))
// console.log('string "123dsa"', Number('123dsa'))
// console.log('string "123"', Number('123'))
// console.log('undefined', +undefined)
// console.log('boolean true', +true)
// console.log('boolean false', +false)
// console.log("Number('123') === Number('123dsa')", Number('123') === Number('123dsa'))


// methods - functions

// isNaN() - determines whether the passed value is the number value NaN
// return boolean
// console.log("isNaN(Number('123dsa')", isNaN(Number('123dsa')))
// console.log("isNaN(Number('123')", isNaN(Number('123')))

// isFinite() - determines whether a value is finite
// first converting the value to a number if necessary
// return boolean
// console.log('NaN', isFinite(NaN))
// console.log('Infinity', isFinite(Infinity))
// console.log('-Infinity', isFinite(-Infinity))
// console.log("Number('123dsa'", isFinite(Number('123dsa')))
// console.log("Number('123')", isFinite(Number('123')))
// console.log('1/0', isFinite(1/0))

// parseInt() - parses a string argument and returns an integer of the specified radix
// return number
// console.log("('10')", parseInt('10'));
// console.log("('        10')", parseInt('        10'));
// console.log("('10         ')", parseInt('10         '));
// console.log("('00010')", parseInt('00010'));
// console.log("('ee10')", parseInt('ee10'));
// console.log("('10ee')", parseInt('10ee'));
// console.log("('10ee12')", parseInt('10ee12'));
// console.log("('10', 2)", parseInt('10', 2));
// console.log("('16', 16)", parseInt('16', 16));
// console.log("('10.12', 10)", parseInt('10.12', 10));


// parseFloat()
// console.log("('10.12')", parseFloat('10.12'));
// console.log("('        10.12')", parseFloat('        10.12'));
// console.log("('10.12         ')", parseFloat('10.12         '));
// console.log("('ee10.12')", parseFloat('ee10.12'));
// console.log("('10.12ee')", parseFloat('10.12ee'));
// console.log("('10ee12.12')", parseFloat('10ee12.12'));

// Number.toFixed() - representing the number in fixed-point notation
// return string
// const a = 12345.6789
// console.log(a.toFixed())
// console.log(0, a.toFixed(0))
// console.log('1', a.toFixed(1))
// console.log('10', a.toFixed(10))

// Number.toPrecision() - representing the number to a specified
// precision in fixed-point or exponential notation
// return string
// const a = 12345.6789
// console.log('10', a.toPrecision(10))

// Number.isInteger() - determine whether the passed value is an integer
// return boolean
// const a = 12345.6789
// console.log(Number.isInteger(a))