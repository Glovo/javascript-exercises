let chained = false;

const Math = (current = 0) => {
  const chainable = (val) => (chained ? Math(val) : val);

  return {
    add: (val = 0) => chainable(current + val),
    chain: () => {
      chained = true;
      return chainable(current);
    },
    divide: (val = 1) => chainable(current / val),
    end: () => {
      chained = false;
      return current;
    },
    mult: (val = 1) => chainable(current * val),
    sub: (val = 0) => chainable(current - val),
  };
};

module.exports = Math;
