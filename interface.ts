// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel (labelledObj: {label: string}) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object'}

printLabel(myObj)


interface LabelledValue {
  label: string
}
function interFaceLabel (obj: LabelledValue) {
  console.log(obj.label)
}
interFaceLabel(myObj)

// 可选属性 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
// “option bags
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  let newSqure = {color: 'white', area: 10}
  if (config.color) newSqure.color = config.color
  if (config.width) newSqure.area = config.width * config.width
  return newSqure
}
let mySquare = createSquare({color: 'red'})

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = {
  x: 10,
  y: 20
}
// p1.x = 5
// Cannot assign to 'x' because it is a read-only property.

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似
let a: number[] = [1, 2, 3 ,4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12
// Index signature in type 'ReadonlyArray<number>' only permits reading.
// a = ro  也不可以

// 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
a = ro as number[]

// 额外的属性检查
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

// 函数类型
interface SearchFunc {
  // 参数                             ： 返回值
  (source: string, subString: string) : boolean
}

// let mySearch: SearchFunc
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString)
//   return result > -1
// }

// 函数的参数名不需要与接口里定义的名字相匹配。
// let mySearch: SearchFunc
// mySearch = function (src: string, sub: string) : boolean {
//   let result = src.search(sub)
//   return result > -1
// }

// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量

let mySearch: SearchFunc
mySearch = function (src, lib) {
  let result = src.search(lib)
  return result > -1
}

// 可索引的类型

interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

// 只读

interface ReadonlyStringArray {
  readonly [index: number] : string
}
let myArrayInfo: ReadonlyStringArray = ["daiwei", 'other']
// myArrayInfo[2] = 'hahaha' 
// Index signature in type 'ReadonlyStringArray' only permits reading.

// 类类型
// 实现接口

interface ClockInterface {
  currentTime: Date
}
class Clock implements ClockInterface {
  currentTime: Date
  constructor (
    h: number,
    m: number
  ) {}
}

// 你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：

interface MyClockInterface {
  currentTime: Date
  setTime(d: Date)
}
class MClock implements MyClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(
    h: number,
    m: number
  ) {}
}
