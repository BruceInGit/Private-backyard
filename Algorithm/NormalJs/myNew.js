function myNew(constructor,...args){
  const obj = Object.create(constructor.prototype)
  
  obj._proto_ = constructor.prototype

  const result = constructor.apply(obj,args)

  return result instanceof Object ? result : obj
}