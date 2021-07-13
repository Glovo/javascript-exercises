const { double, mapObj, isDivisibleBy, filterObj, compose, recursiveMap} = require('./functional-programming');

describe('Functional programming', () => {
    describe('double', () => {
        it('returns double of the number given', () => {
            const doubleEntries = [[5, 10], [200, 400], [-1, -2], ["1", 2]]

            doubleEntries.forEach(([number, result]) =>
            expect(double(number)).toBe(result))
        });
    });

    describe('mapObj', () => {
        it('returns an object with for which we apply a map function properly', () => {
           const object = { a: 1, b: 2, c: 3}

           expect(mapObj(double, object)).toEqual({a: 2, b: 4, c: 6})
        });
    });

    describe('recursiveMapObj', () => {
        it('returns an object with for which we apply a map function properly', () => {
            expect(recursiveMap(double, [1, 2, 3])).toEqual([2, 4, 6])
        });
    });

    describe('isDivisibleBy', () => {
        const divisibleEntries = [
            { divModule: 5, testNumber: 5*2, expects: true },
            { divModule: 5, testNumber: 3, expects: false },
            { divModule: 27, testNumber: 27, expects: true },
            { divModule: 3, testNumber: 3*9, expects: true },
            { divModule: 7, testNumber: 11, expects: false },
            { divModule: 27, testNumber: 27*12.5, expects: false },
        ]

        divisibleEntries.forEach(({ divModule, testNumber, expects}) => {
            it(`returns a curried function for ${divModule} that returns ${expect} when testing ${testNumber}`, () => {
                expect(isDivisibleBy(divModule)(testNumber)).toBe(expects)
            })
        })
    })

    describe('filterObj', () => {
        it('returns a function that can filter an object\'s key by its value ', () => {
            const object = { a: 11, b: 4, c: 10, d: 7}

            expect(filterObj(isDivisibleBy(2), object)).toEqual({ b: 4, c: 10 })
        });
    });

    describe('compose', () => {
        it('executes properly the composition of one function ', () => {
            const newFunction = compose(double)

            expect(newFunction(5)).toBe(10)
        });

        it('executes properly composition for more than one function', () => {
            const toEntry = obj => Object.entries(obj)
            const isDivisibleBy27 = isDivisibleBy(27)
            const mapObjCurr = curry(mapObj)
            const filterObjCurr = curry(filterObj)

            const newFunction = compose(
                mapObjCurr(double),
                filterObjCurr(isDivisibleBy27),
                toEntry,
            )

            expect(newFunction({a: 139347, b: 129025, c: 170313, d: 139455 })).toEqual([["d", 278910], ["a", 278694]])
        });
    });

});

// Ramda
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}