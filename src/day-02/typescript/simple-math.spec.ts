import SimpleMath from './simple-math';

describe('SimpleMath Chainable', () => {
  it('should return the expected default value', () => {
    const math = new SimpleMath();

    expect(math.get()).toBe(0);
  });

  it('should return the expected add value', () => {
    const math = new SimpleMath();

    math.add();

    expect(math.get()).toBe(1);
  });

  it('should return the expected add value parsed', () => {
    const math = new SimpleMath();

    math.add('2');

    expect(math.get()).toBe(2);
  });

  it('should return the expected sub value', () => {
    const math = new SimpleMath();

    math.sub();

    expect(math.get()).toBe(0);
  });

  it('should return the expected mult value', () => {
    const math = new SimpleMath();

    math.mult();

    expect(math.get()).toBe(0);
  });

  it('should return the expected divide value', () => {
    const math = new SimpleMath();

    math.divide();

    expect(math.get()).toBe(0);
  });

  it('should return the expected custom values', () => {
    const math = new SimpleMath();

    math.add(4);
    math.mult('2');
    math.sub(2);
    math.divide('3');

    expect(math.get()).toBe(2);
  });
});
