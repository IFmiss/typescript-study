// bool
let isDone: boolean = false

// 数字
let decL: number = 6
let hexL: number = 0xf00d
let binL: number = 0b1010
let octL: number = 0o774

// 字符串
let myname: string = 'dw'
myname = 'daiwei'

let iname: string = `Daiwei`
let age: number = 25
let disc: string = `my name is ${iname}, i will be ${age + 1} years old next year`

// 数组
let list: number [] = [1, 2, 4]
let list1: Array<number> = [1, 2, 3]

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let x: [string, number]
x = ['hi', 1]

// 枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
let colorName: string = Color[2]
console.log(colorName)

// Any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
notSure.ifItExists()
notSure.toFixed()

let mylist: any[] = [1, true, 'free']
mylist[1] = 100

// void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser (): void {
  console.log("This is my warning message");
} 

// Null 和 Undefined
let u: undefined = undefined
let n: null = null

// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
function error (message: string): never {
  throw new Error(message)
}

// Object object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void
create({ prop: 0})
create(null)

// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
let strl: number = (someValue as string).length
