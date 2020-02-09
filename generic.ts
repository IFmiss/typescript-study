function identity(arg: number): number {
  return arg
}

function ide<T>(arg: T): T {
  return arg
}

const a = ide<number>(1)

let output = ide<string>("myString");

// 使用泛型变量
function longIde<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// 泛型类型
let myIde: <U>(arg:U) => U = ide
let myNewIde: {<T>(arg:T):T} = ide

interface genericeFn {
  <T>(arg:T):T
}

let sfIde: genericeFn = ide

let sfA = sfIde<number>(1)

class GNumber<T> {
  zv: T
  add: (x: T, y: T) => T
}
let myIdeGN = new GNumber<number>()
myIdeGN.zv = 1
myIdeGN.add = function(x, y){return x + y}

let stringNumeric = new GNumber<number>();
stringNumeric.zv = 1;
stringNumeric.add = function(x, y) { return x + y; };

alert(stringNumeric.add(stringNumeric.zv, 1));

interface lengthOtherWise {
  length: number
}

function lgIde<T extends lengthOtherWise>(arg: T): T {
  console.log(arg.length)
  return arg
}

lgIde('1')
lgIde({length: 1})

function getProp<T, K extends keyof T>(obj: T, k: K) {
  return obj[k]
}

let gx = {a: 1, b: 2, c: 3}
let gk = getProp(gx, 'a')

// function create<T>(c: {new(): T}): T {
//   return new c()
// }
// create({a: 1})

class bKeep {
  hasMask: boolean
}

class zooKeeper {
  nameTag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: bKeep
}

class Lion extends Animal {
  keeper: zooKeeper
}

function createInstance<A extends Animal>(c: new() => A): A {
  return new c()
}

createInstance(Bee).keeper.hasMask
createInstance(Lion).keeper.nameTag