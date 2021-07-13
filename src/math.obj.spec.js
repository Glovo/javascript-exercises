const Math = require('./math.obj');

describe('Math Chainable', () => {
  it('should return the expected default value', () => {
    const math = new Math();

    expect(math.get()).toBe(0);
  });

  it('should return the expected default add value', () => {
    const math = new Math();

    math.add();

    expect(math.get()).toBe(0);
  });

  it('should return the expected default sub value', () => {
    const math = new Math();

    math.sub();

    expect(math.get()).toBe(0);
  });

  it('should return the expected default mult value', () => {
    const math = new Math();

    math.mult();

    expect(math.get()).toBe(0);
  });

  it('should return the expected default divide value', () => {
    const math = new Math();

    math.divide();

    expect(math.get()).toBe(0);
  });

  it('should return the expected custom values', () => {
    const math = new Math();

    math.add(4);
    math.mult(2);
    math.sub(2);
    math.divide(3);

    expect(math.get()).toBe(2);
  });
});
