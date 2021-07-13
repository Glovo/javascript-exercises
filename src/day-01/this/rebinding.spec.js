const { bind } = require('./rebinding');

describe('Rebinding', () => {
  const originalBind = Function.prototype.bind

  function ourFunction() {
    return this.name;
  };

  beforeAll(() => {
      Function.prototype.bind = bind
  })

  afterAll(() => {
    Function.prototype.bind = originalBind
  })

  it('should return the expected bind for one function', () => {
    const context = { name: 'Hannah Montana' }

    const expectedFunction = ourFunction.bind(context)

    expect(expectedFunction()).toBe(context.name);
  });

  it('should return the expected bind for two functions', () => {
    const contextOne = { name: 'Hannah Montana' }
    const contextTwo = { name: 'Miley Cirus' }

    let functionBind = function ourFunction() {
      return this.name;
    };

    functionBind = functionBind.bind(contextOne)
    expect(functionBind()).toBe(contextOne.name);

    functionBind = functionBind.bind(contextTwo)
    expect(functionBind()).toBe(contextTwo.name)
  });
});
