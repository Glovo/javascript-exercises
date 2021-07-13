import fetch from 'node-fetch'
// URL: https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all
// Exercise 1: Print the fact number 42 (in Uppercase) of the API response using Promises
export const giveMeThe42thElement = () => {

    return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
            .then((data) => data.json())
            .then((facts) => facts[41]) // Your promise in here
}

// Exercise 2: Rewrite the previous example with async / await
export const giveMeThe42thElementAsync = async() => {
    const response = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    const facts = await response.json()

    return facts[41]
}

// Exercise 3: Create a function, we should be able to pass a callback to it to fetch all the facts.
// The function should still return the fact n 42
export const giveMeThe42thElementCallback = async (callback) => {
    const response = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    const facts = await response.json()
    callback(facts)

    return facts[41]
}


// Exercise 4: Create 3 timers of (2, 3, and 5 seconds). Create a function which returns true after 10 seconds (after all the functions are called synchronously)
const createTimer = (time) => new Promise(resolve => setTimeout(() => resolve(), time))
export const runAfterEachOther = async () => {
    await createTimer(2000)
    await createTimer(3000)
    await createTimer(5000)

    return true
}

// Exercise 5: Recreate Promise.all with async / await, and use the previous timers. It should execute after 5 seconds
export const promiseAll = async (promiseList) => {
    const promises = promiseList.map(promise => promise())

    for (let promise of promises) {
        await promise
    }

    return true
}