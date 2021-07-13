const Math = require('../mathlib/math.obj');

class EvenMath extends Math {
  get() {
    const { current } = this;

    return current % 2 === 0 ? current : -1;
  }
}

module.exports = EvenMath;
