const Math = require('./math.chain');

describe('Math Chainable', () => {
  describe('when NOT leveraging .chain()', () => {
    it('should return the expected default values', () => {
      expect(Math().add()).toBe(0);
      expect(Math().sub()).toBe(0);
      expect(Math().mult()).toBe(0);
      expect(Math().divide()).toBe(0);
    });

    it('should return the expected custom values', () => {
      expect(Math().add(1)).toBe(1);
      expect(Math(2).add(1)).toBe(3);
      expect(Math().sub(1)).toBe(-1);
      expect(Math(1).sub(1)).toBe(0);
      expect(Math().mult(1)).toBe(0);
      expect(Math(2).mult(1)).toBe(2);
      expect(Math().divide(1)).toBe(0);
      expect(Math(2).divide(2)).toBe(1);
    });
  });

  describe('when leveraging .chain()', () => {
    it('should return the expected default values', () => {
      expect(Math().chain().add().end()).toBe(0);
      expect(Math().chain().sub().end()).toBe(0);
      expect(Math().chain().mult().end()).toBe(0);
      expect(Math().chain().divide().end()).toBe(0);
    });

    it('should return the expected custom values', () => {
      expect(Math().chain().add(1).end()).toBe(1);
      expect(Math(2).chain().add(1).end()).toBe(3);
      expect(Math().chain().sub(1).end()).toBe(-1);
      expect(Math(1).chain().sub(1).end()).toBe(0);
      expect(Math().chain().mult(1).end()).toBe(0);
      expect(Math(2).chain().mult(1).end()).toBe(2);
      expect(Math().chain().divide(1).end()).toBe(0);
      expect(Math(2).chain().divide(2).end()).toBe(1);
    });

    it('should return the expected chained values', () => {
      expect(Math().chain().add(1).sub(3).mult(2).end()).toBe(-4);
      expect(Math(10).chain().sub(2).mult(3).add(6).divide(3).end()).toBe(10);
    });
  });
});
