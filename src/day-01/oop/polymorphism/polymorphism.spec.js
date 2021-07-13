const Math = require('../mathlib/math.obj');
const MathEven = require('./math.even');
const MathOdd = require('./math.odd');

describe('Polymorphism', () => {
  it('should return the expected values', () => {
    const math = new Math();

    expect(math.get()).toBe(0);

    math.add(1);

    expect(math.get()).toBe(1);

    math.add(1);

    expect(math.get()).toBe(2);
  });

  it('should return only the even values', () => {
    const math = new MathEven();

    expect(math.get()).toBe(0);

    math.add(1);

    expect(math.get()).toBe(-1);

    math.add(1);

    expect(math.get()).toBe(2);
  });

  it('should return only the odd values', () => {
    const math = new MathOdd();

    expect(math.get()).toBe(-1);

    math.add(1);

    expect(math.get()).toBe(1);

    math.add(1);

    expect(math.get()).toBe(-1);
  });
});
