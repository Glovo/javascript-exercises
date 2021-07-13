const Math = require('../mathlib/math.obj');

class EvenMath extends Math {
  get() {
    const { current } = this;

    return current % 2 === 0 ? -1 : current;
  }
}

module.exports = EvenMath;
