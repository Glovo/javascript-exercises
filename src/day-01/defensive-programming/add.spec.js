import { add } from './add'

describe('Add function', () => {
  describe('When inputs are valid', () => {
    test.each([
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 2],
      [1, '1', 2],
      [1, '  1      ', 2],
      [1, '1.0', 2],
      [1, '1.1', 2.1],
      [1, '0.1', 1.1],
      [1, '.1', 1.1],
      [1, '1,000', 1_001],
      [1, '1,000.00', 1_001],
      [1, '1,000.10', 1_001.1],
      [100, '1e3', 200],
      [100, '-1e3', 0],
      [0, '1,000.1e3', 1_000_100],
      [1_000_100, '-1,000.1e3', 0],
      [0, -0, 0],
    ])('%p + %p = %p', (a, b, expected) => {
      expect(add(a, b)).toBe(expected)
      expect(add(b, a)).toBe(expected)
    })
  })

  describe('When inputs are inavlid', () => {
    test.each([
      [0, ''],
      [0, 'hello'],
      [0, '+1'],
      [0, '--1'],
      [0, '1-'],
      [0, '1e3e3'],
      [0, 'e'],
      [0, '.'],
      [0, ','],
      [0, NaN],
      [0, 'Infinity'],
      [0, '-Infinity'],
      [0, Number.POSITIVE_INFINITY],
      [0, Number.NEGATIVE_INFINITY],
    ])('%p + %p throws', (a, b) => {
      expect(add(a, b)).toThrow()
      expect(add(b, a)).toThrow()
    })
  })
})
