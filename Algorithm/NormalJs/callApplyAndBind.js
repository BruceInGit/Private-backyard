Function.prototype.myCall = function(context,...args){
  context = context || globalThis

  const uniqueSymbol = Symbol()
  context[uniqueSymbol] = this

  const result = context[uniqueSymbol](...args)
  delete context[uniqueSymbol]

  return result
}

Function.prototype.myApply = function(context,...args) {
    context = context || globalThis
    args = args || [];

    const uniqueSymbol = Symbol()
    context[uniqueSymbol] = this

    const result = context[uniqueSymbol](...args)
    delete context[uniqueSymbol]

    return result
}


Function.prototype.myBind = function (context, ...args) {
    const self = this;
    return function (...innerArgs) {
        return self.apply(context || globalThis, [...args, ...innerArgs]);
    };
};
