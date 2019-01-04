// 类
class Greeter {
  greeting: string
  constructor (message: string) {
    this.greeting = message
  }
  greet () {
    return 'Hello, ' + this.greeting
  }
}

let greeting = new Greeter('world')

// 继承
// class Animal {
//   move (distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m`)
//   }
// }

// class Dog extends Animal {
//   bark () {
//     console.log('woof! woof!')
//   }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()

// 复杂的例子
class Animal {
  name: string
  constructor (theName: string) {
    this.name = theName
  }
  move (distace: number = 0) {
    console.log(`${this.name} moved ${distace}m`)
  }
}

class Snake extends Animal {
  constructor (name: string) {
    super(name)
  }
  move (distace = 5) {
    console.log("Slithering...")
    super.move(distace)
  }
}

class Horse extends Animal {
  constructor (name: string) {
    super(name)
  }
  move (distace = 45) {
    console.log("Galloping...")
    super.move(distace)
  }
}

let sam = new Snake ('sammy the python')
let tom: Animal = new Horse('Tommy the Palomino')
sam.move()
tom.move(34)

// 公共，私有与受保护的修饰符
class AnimalV1 {
  public name: string
  public constructor (theName: string) {
    this.name = theName
  }
  public move (dis: number) {
    console.log(`${this.name} moved ${dis}m.`)
  }
}

class AnimalV2 {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}
// new AnimalV2('cat').name
// Property 'name' is private and only accessible within class 'AnimalV2'.

class AnimalV3 {
  private name: string
  constructor (theName: string) {
    this.name = theName
  }
}

class Rhino extends AnimalV3 {
  constructor () {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor (theName: string) {
    this.name = theName
  }
}

let animal = new AnimalV3 ("Goat")
let rhino = new Rhino()
let employee = new Employee("Bob")

animal = rhino
// animal = employee 'Employee' is not assignable to type 'AnimalV3'. Types have separate declarations of a private property 'name'.

// 理解 protected 修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Employee1 extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch () {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howard = new Employee1 ('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。


// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Person1 {
  protected name: string
  protected constructor (theName: string) {
    this.name = theName
  }
}
// Employee2 能够继承 Person1
class Employee2 extends Person1 {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch () {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}
let howard1 = new Employee2('Howard', 'Sales')
// let join = new Person1('John') // 错误: 'Person1' 的构造函数是被保护的.

// readonly修饰符
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor (theName: string) {
    this.name = theName
  }
}
let dad = new Octopus('Man with the 8 strong legs')
// dad.name = 'Man with the 3-prece suit'   错误  name  是只读的

// 参数属性
class Octopus1 {
  readonly numberOfLegs: number = 8
  constructor (readonly name: string) {} 
}

// 存取器  TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。 下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。
class Employee3 {
  fullName: string
}

let employee3 = new Employee3()
employee3.fullName = "Bob Smith"
employee3.fullName && console.log(employee3.fullName)

// 拦截get 和 setter
let passcode = "secret passcode"
class Employee4 {
  private _fullName: string
  get fullName (): string {
    return this._fullName
  }
  set fullName (newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName
    } else {
      console.log("Error: Unauthorized update of employee!")
    }
  }
}
let employee4 = new Employee4()
employee4.fullName = "Bob Smith"
if (employee4.fullName) {
  alert(employee4.fullName)
}

// 静态属性
class Grid {
  static origin = {
    x: 0,
    y: 0
  }
  calc (point: {x: number, y: number}): number {
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
  constructor (public scale: number) {}
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

// 抽象类
abstract class Animal4 {
  abstract maskeSound(): void
  moveBy (): void {
    console.log('roaming the earch...')
  }
}

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
abstract class Department {
  constructor (public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void   // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor () {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }
  printMeeting (): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
