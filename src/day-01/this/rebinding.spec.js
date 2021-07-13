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

    const functionOne = ourFunction.bind(contextOne)
    expect(functionOne()).toBe(contextOne.name);

    const functionTwo = ourFunction.bind(contextTwo)
    expect(functionTwo()).toBe(contextTwo.name)
  });
});
