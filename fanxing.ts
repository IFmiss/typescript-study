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
function identity3<T> (arg: T): T  {
  return arg
}

let myIdentity3: {<T>(arg:T): T} = identity3

// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以

function identity4<T>(arg: T): T {
  return arg
}

let myIdentity4: <U>(arg: U) => U = identity4

// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
interface GenericFn <T> {
  (arg: T): T
}

function identity5<T>(arg: T): T {
  return arg
}

let myIdentity5: GenericFn<number> = identity5

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {return x + y}
// GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = ''
stringNumeric.add = function (x, y) {return x + y}
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))

// 泛型约束
function loggingIdent<T>(arg: T): T {
  // console.log(arg.length) Property 'length' does not exist on type 'T'.
  return arg
}

function loggingIdent1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// function loggingIdent2<T extends Lengthwise> (arg: T): T {
//   console.log(arg.length)
//   return arg
// }
// loggingIdent1(3);  Argument of type '3' is not assignable to parameter of type '{}[]'.

// function getProperty(obj: T, key: K) {
//   return obj[key]
// }
// let x = {a: 1, b: 2, c: 3, d: 4}
// getProperty(x, 'a')
// getProperty(x, 'm')

