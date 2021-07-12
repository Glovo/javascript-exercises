// A function that doubles the given value
const double;

double(25)

// A mapObj, given an object, map all the values with a function
const mapObj = (mapFn, object) => null

mapObj(double, {a: 139347, b: 129025, c: 170313, d: 139455 })

// filterObject and isDivisible by 27
const filterObj = (filterFn, object) => null
const isDivisibleBy = (module) => (input) => null


filterObj(isDivisibleBy27, {a: 139347, b: 129025, c: 170313, d: 139455 })


// A compose function that can apply all this functions to an input, hint you may need to curry previous functions
const compose = (...args) => (input) => null
const toEntry = (obj) => obj.toEntry()

compose(
    toEntry, 
    filterObj(isDivisibleBy27), 
    mapObj(double)
)({a: 139347, b: 129025, c: 170313, d: 139455 })






// Implement mapObj with recursivity

