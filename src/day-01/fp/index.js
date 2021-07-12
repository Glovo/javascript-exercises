// EXERCISE 1: A function that doubles the given value
const double = (number) => null

double(25);

// EXERCISE 2: A mapObj, given an object, map all the values with a function
const mapObj = (mapFn, object) => null

mapObj(double, {a: 139347, b: 129025, c: 170313, d: 139455 })

// EXERCISE 3: filterObject and isDivisible by 27
const filterObj = (filterFn, object) => null
const isDivisibleBy = (module) => (input) => null

// Create isDivisibleBy27
filterObj(isDivisibleBy27, {a: 139347, b: 129025, c: 170313, d: 139455 })


// EXERCISE 4: A compose function that can apply all this functions to an input, hint you may need to curry previous functions
// In the example it should be like doing: toEntry(filterObj(isDivisibleBy27)(mapObj(double)(object))))
const compose = (...args) => (input) => null
const toEntry = (obj) => obj.toEntry()

const object = {a: 139347, b: 129025, c: 170313, d: 139455 }

compose(
    toEntry, 
    filterObj(isDivisibleBy27), 
    mapObj(double)
)(object)


// EXERCISE 5: Implement mapObj with recursivity

