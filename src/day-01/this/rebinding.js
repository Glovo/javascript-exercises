// EXERCISE: Extend the method bind so that it allows to change context more than once
// assume that bind is going to be Function.prototype.bind
export const bind = function (ctx) {
    // Save current context to pass in the scope
    const funcObj = this;
    const newFuncContext = funcObj;

    // Create new function that generates binded function with apply
    const newFunction = function() {
        return newFuncContext.apply(ctx, arguments)
    }

    // In this new function, bind does not gerate a new binded function, hence it can be set twice
    newFunction.bind = function() {
        return Function.prototype.bind.apply(funcObj, arguments);
    }

    return newFunction;
};