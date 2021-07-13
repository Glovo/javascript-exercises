import { mod } from './mod'

describe('Modulo function', () => {
  test.each([
    [7, 5, 2],
    [17, 23, 17],
    [16.2, 3.8, 1],
    [5.8, 3.4, 2.4],
    [-7, 5, 3],
    [-2, 15, 13],
    [-5.8, 3.4, 1],
    [12, -1, 0],
    [12, -5, -3],
    [-3, -8, -3],
    [0, 2, 0],
    [4, 0, NaN],
    [0, 0, NaN],
    [2, NaN, NaN],
    [NaN, 2, NaN],
    [NaN, NaN, NaN],
    [2, Math.POSITIVE_INFINITY, NaN],
    [Math.POSITIVE_INFINITY, 2, NaN],
    [2, Math.NEGATIVE_INFINITY, NaN],
    [Math.NEGATIVE_INFINITY, 2, NaN],
  ])('%p + %p = %p', (n, d, expected) => {
    expect(mod(n, d)).toBe(expected)
  })
})
