// 基本类型

let isDone: boolean = false

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";

const list: number[] = [1, 2, 3]
const list1: Array<number> = [1, 2, 3]

let x: [string, number] = ['hello', 10]

enum TypeEnum {
  TEST,
  DEV,
  PROD
}

const env = TypeEnum.TEST

let noSure: Array<any> = [3]
noSure = ['st']

function warn(): void {
  console.log('warning')
}

let u: undefined = undefined
let n: null = null

let un: number = undefined

let never = (): never => {
  throw new Error('1231')
}

let someValue: any = "this is a string";
const a = (<string>someValue).toLocaleUpperCase()
const b = (someValue as string).toLocaleUpperCase()

