// 不用泛型的话，这个函数可能是下面这样：
function identity(arg: number) {
  return arg
}

// 或者，我们使用any类型来定义函数：
function identity1(arg: any) {
  return arg
}

// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity2<T>(arg: T): T {
  return arg
}

let output = identity2<string>('daiwei')

let output1 = identity2('daiwei')

// 使用泛型变量
function loggerIdentity<T>(arg: T): T {
  // console.log(arg.length)   // Property 'length' does not exist on type 'T'.
  return arg
}

// 由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：
function loggerIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}

// 泛型类型
