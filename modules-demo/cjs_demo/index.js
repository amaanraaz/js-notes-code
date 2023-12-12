// we want to use the search logic here
const searchFunctions = require('./searching')
// const {linearSearch,binarySearch} = require('./searching)

// console.log(searchFunctions);

const arr = [10,20,90,100,122];

console.log(searchFunctions.linearSearch(arr,100));