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
animal = employee

// 理解 protected
