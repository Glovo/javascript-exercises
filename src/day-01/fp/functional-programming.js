// EXERCISE 1: A function that doubles the given value
export const double = (number) => number * 2

// EXERCISE 2: A mapObj, given an object, map all the values with a function
export const mapObj = (mapFn, object) =>
    Object
        .entries(object)
        .reduce((accumulator, [key, value]) => {
            const newValue = mapFn(value)
            return Object.assign({[key]: newValue }, accumulator)
        }, {})

// EXERCISE 3: filterObject and isDivisible (curried)
export const filterObj = (filterFn, object) =>
    Object.fromEntries(
        Object
            .entries(object)
            .filter(([_, value]) => filterFn(value))
    )
export const isDivisibleBy = (module) => (input) => input % module === 0

// EXERCISE 4: A compose function that can apply all this functions to an input, hint you may need to curry previous functions
// eg:
// compose(
//     mapObj(double),
//     filterObj(isDivisibleBy27),
//     toEntry,
// )(object)
// In the example it should be like doing: toEntry(filterObj(isDivisibleBy27)(mapObj(double)(object))))
export const compose = (...args) => (input) =>
    args.reduce((acc, partialFn) => partialFn(acc), input)

// EXERCISE 5: Implement map  (map(Function, Array)) with recursivity, you cant use map / reduce
export const recursiveMap = (mapFn, arr) => {
    if (arr.length === 0) { return []}

    const [valueToMap, ...rest] = arr

    return [mapFn(valueToMap), ...recursiveMap(mapFn, rest)]
}

