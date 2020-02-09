// 交叉类型（Intersection Types）
class APerson {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {
    console.log('ConsoleLogger log')
  }
}

function fnExtends<T, U>(first: T, secend: U): T & U {
  let result = <T & U> {}
  for (let key in first) {
    (<any>result)[key] = (<any>first)[key]
  }

  for (let key in secend) {
    if (!result.hasOwnProperty(key)) {
      (<any>result)[key] = (<any>secend)[key]
    }
  }
  return result
}

const jm = fnExtends(new APerson('hai'), new ConsoleLogger())
jm.name
jm.log()

// 联合类型（Union Types）
interface Brid {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Brid | Fish {
  return {
    fly: () => console.log('fly'),
    layEggs: () => console.log('layEggs'),
    swim: () => console.log('swim')
  }
}

let pet = getSmallPet()
// pet.layEggs()
// pet.swim()
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
}
else {
  (<Brid>pet).fly()
}

function isFish (pet: Fish | Brid): pet is Fish {
  return ((<Fish>pet).swim !== undefined)
}
const fishIs = isFish(pet)

type LinkedList<T> = T & { next?: LinkedList<T>}

interface per {
  name?: string;
}

const s: LinkedList<per> = {
  name: '111',
  next: {
    name: '222',
    next: {}
  }
}

type Alias = {num: number}
interface IAlias {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: IAlias): IAlias

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // 
    } else if (easing === 'ease-out') {
      // 
    } else if (easing === 'ease-in-out') {
      // 
    } else {
      // 
    }
  }
}

let botton = new UIElement()
botton.animate(0, 0, 'ease-in')
botton.animate(1, 1, 'ease-in-out')
