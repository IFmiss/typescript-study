function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface labelValue {
  name: string
  age: number
  de?: string
  readonly a: string
  c: ReadonlyArray<number>
}

const interfaceA: labelValue = {
  a: '2we',
  name: '1',
  age: 12,
  c: [12, 3]
}
// interfaceA.a = 1
interfaceA.age = 20
interfaceA.c = [1, 2]
interfaceA.c.length


let interfaceVal: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = interfaceVal
ro.length

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  return {
    color: '1',
    area: 1
  }
}

let mySquare = createSquare({ colour: "red", width: 100 });


interface SearchFunc {
  (sourse: string, sub: string): boolean
}

const mySearch: SearchFunc = (sourse, sub) => {
  return false
}

interface stringArr {
  [index: number]: string
}

const stringA: stringArr = ['111', '2222']
let stringStr = stringA[0]

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOk {
  [x: string]: Animal
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let arr: ReadonlyStringArray = ['qw', '2']
// arr[0] = '232'

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface shap {
  color: string
}

interface sqr extends shap, penStork {
  num: number
}

interface penStork {
  penWidth: number
}

let sqera = <sqr>{}
sqera.color = '#000'
sqera.num = 1
sqera.penWidth = 2


class Ctrl {
  private state: any
  public prop: any
}

interface SelectableControl extends Ctrl {
  select (): void
}

class Button extends Ctrl implements SelectableControl {
  select () {}
}

class TextBox extends Ctrl {}

const tb = new TextBox()
tb.prop = 2

class IImage extends Ctrl implements SelectableControl {
  select() { }
}

const im = new IImage()
im.prop = 3

class Bs extends Ctrl implements SelectableControl {
  select() {}
}
