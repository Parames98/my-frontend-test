function removeSpace(str) {
    return str.replace(/\s+/g, '');
}

const stringWithSpaces = 'Hello, my name is Parames'
const removedSpace = removeSpace(stringWithSpaces)
console.log('Removed', removedSpace)