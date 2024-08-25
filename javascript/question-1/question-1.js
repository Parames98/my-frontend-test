function reverseString(str) {
    return str.split().reverse().join('')
}

const originalString = 'Hello World'
const reverseString = reverseString(originalString)
console.log('Reverse string', reverseString)