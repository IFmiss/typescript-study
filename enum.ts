// 数字枚举
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction.Right)

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Right)

// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
enum Responsed {
  No = 0,
  Yes = 1
}

function responsed (recipient: string, message: Responsed): void {
  console.log(recipient, message)
}

responsed("Princess Caroline", Responsed.Yes)

// 字符串枚举
// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
enum DirectionString {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}
console.log(DirectionString.RIGHT)

// 异构枚举（Heterogeneous enums）.
enum BooleanLikeHeterogeneousEnum  {
  NO = 0,
  YES = 'YES'
}

// 计算的和常量成员
// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
enum E {
  X
}
console.log(E.X)

// 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
enum E1 {
  X,
  Y,
  Z
}
console.log(E1)

enum E2 {
  A = 1,
  B,
  C
}
console.log(E2)

enum FileAccess {
  None,
  Read      = 1 << 1,
  Write     = 1 << 2,
  ReadWrite     = Read | Write,
  G = "123".length
}
console.log(FileAccess)

// 联合枚举与枚举成员的类型
enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle,
  radius: number
}

interface Square {
  kind: ShapeKind.Square,
  sideLength: number
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100
}

console.log(c)

// 联合。
enum E3 {
  Foo,
  Bar
}

// function f (x: E3) {
//   if (x != E3.Foo || x != E3.Bar) { // This condition will always return 'true' since the types 'E3.Foo' and 'E3.Bar' have no overlap.
//     console.log('emmmm')
//   }
// }

// 运行时的枚举
enum E4 {
  X,
  Y,
  Z
}
function f1 (obj: { X: number}) {
  return obj.X;
}

f1(E4)

// 反向映射
// 除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 例如，在下面的例子中：
enum Enum {
  A
}

let a = Enum.A
let nameOfA = Enum[a]
console.log(nameOfA)

// const枚举
// const enum Enum1 {
//   A = 1,
//   B = A * 2
// }
// console.log(Enum1)

// 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
const enum Directions {
  UP,
  Down,
  Left,
  Right
}
let direction = [Directions.UP, Directions.Down, Directions.Left, Directions.Right]
console.log(direction)

// 外部枚举
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
declare enum Enum2 {
  A = 1,
  B,
  C = 2
}
console.log(Enum2)

// 结果为  console.log(Enum2);