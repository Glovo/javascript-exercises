const { giveMeThe42thElement, giveMeThe42thElementAsync, giveMeThe42thElementCallback, runAfterEachOther, promiseAll } = require('./asynchronous');
import fetch from 'node-fetch'

jest.mock('node-fetch', () => jest.fn())
describe('Functional programming', () => {
    const responseJson = { 41: { fact: "Dogs are the meaning of life " }, 1: { fact: "Another one bite the dust" } }
    beforeAll(() => {

        fetch.mockImplementation((url) => {
                if (url === 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all') {
                    return Promise.resolve(
                        {
                            json: () => Promise.resolve(responseJson)
                        }
                    )
                }
                return null
            }
        )
    })
    describe('promise', () => {
        it('returns the 42th element', async () => {
            const result = await giveMeThe42thElement()

            expect(result).toEqual({ fact: "Dogs are the meaning of life " })
        });
    });

    describe('async/await', () => {
        it('returns the 42th element', async () => {
            const result = await giveMeThe42thElementAsync()

            expect(result).toEqual({ fact: "Dogs are the meaning of life " })
        });
    });

    describe('callback', () => {
        it('calls the callback with the right info', async () => {
            const callbackFn = jest.fn()

            const result = await giveMeThe42thElementCallback(callbackFn)

            expect(callbackFn).toHaveBeenCalledWith(responseJson)

            expect(result).toEqual({ fact: "Dogs are the meaning of life " })
        });
    });

    describe("timers", () => {
        describe("runAfterEachOther", () => {
            it('ends running at the right time', async () => {
                jest.useFakeTimers();
    
                const mockFn = jest.fn()
                runAfterEachOther().then(mockFn)
    
                jest.advanceTimersByTime(2000);
                await Promise.resolve()
                expect(mockFn).not.toHaveBeenCalled()
    
                jest.advanceTimersByTime(3000);
                await Promise.resolve()
                expect(mockFn).not.toHaveBeenCalled()
    
                jest.advanceTimersByTime(5000);
                await Promise.resolve()
                await Promise.resolve()
                expect(mockFn).toHaveBeenCalled()
    
                jest.useRealTimers();
            })
        })

        describe("async promise all", () => {
            it('ends running at the right time', async () => {
                jest.useFakeTimers();
                const timer = (time) => new Promise(resolve => setTimeout(() => resolve(), time))
                const createTimerPromise = (number) => () => timer(number * 1000)

                const mockFn = jest.fn()
                promiseAll([
                    createTimerPromise(3),
                    createTimerPromise(5),
                    createTimerPromise(2)
                ]).then(mockFn)

                jest.advanceTimersByTime(5000);

                // One per stacked promise: 3 + 1
                await Promise.resolve()
                await Promise.resolve()
                await Promise.resolve()
                await Promise.resolve()

                expect(mockFn).toHaveBeenCalled()
                jest.useRealTimers();
            })
        })
    })

});