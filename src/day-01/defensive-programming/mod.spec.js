import { mod } from './mod'

describe('Modulo function', () => {
  test.each([
    [7, 5, 2],
    [17, 23, 17],
    [16.2, 3.8, 17],
    [5.8, 3.4, 4],
    [4, 0, 4],
    [-7, 5, 3],
    [-2, 15, 13],
    [-5.8, 3.4, 1],
    [12, -1, NaN],
    [-3, -8, NaN],
    [12, 'apple', NaN],
    ['bee', 9, NaN],
    [null, undefined, NaN],
  ])('%p + %p = %p', (n, d, expected) => {
    expect(mod(n, d)).toBe(expected)
  })
})
