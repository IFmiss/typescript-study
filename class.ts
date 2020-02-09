class CAnimal {
  move (distanceInMeters: number = 0) {
    console.log('move instance: ', distanceInMeters)
  }
}

class CDog extends CAnimal {
  bark () {
    console.log('bark')
  }
}

const dog = new CDog()
dog.bark()
dog.move()
dog.bark()

class DAnimal {
  public name: string
  constructor(name) {
    this.name = name
  }
  move(distanceInMeters: number = 0) {
    console.log(`move: ---->  ${distanceInMeters}`)
  }
}

class DDog extends DAnimal {
  constructor(name) {
    super(name)
  }
  move (distanceInMeters = 5) {
    console.log('DDog move', distanceInMeters)
    super.move(distanceInMeters)
  }
}

class DMiao extends DAnimal {
  constructor(name) {
    super(name)
  }
  move (distanceInMeters = 45) {
    console.log('DMiao move', distanceInMeters)
    super.move(distanceInMeters)
  }
}

let sam = new DDog('sam is a dog')
let tom = new DMiao('tom is a cat')
sam.move()
sam.name = 'daiwei'
tom.move(34)

class Employee {
  fullname: string
}

let employee = new Employee()
employee.fullname = 'daiwei'

if (employee.fullname) {
  console.log(employee.fullname)
}

abstract class EAnimal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...');
  }
}

abstract class Dep {
  constructor(public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void
}

class Acc extends Dep {
  constructor() {
    super('daiwei')
  }
  printMeeting (): void {
    console.log('Acc: printMeeting')
  }
  generateReports(): void {
    console.log('generateReports')
  }
}

let department: Dep
// department = new Dep()
department = new Acc()
department.printName()
department.printMeeting()
// department.generateReports()
department.name



const enumA = En.A
