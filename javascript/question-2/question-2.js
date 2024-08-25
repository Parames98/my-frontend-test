function removeDuplicate(arr) {
return [...new Set(arr)]
}

const array = [1,2,3,4,5,5,5,6,7,7]
const removedArray = removeDuplicate(array)
console.log('Duplicate', removedArray)