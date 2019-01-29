interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named;
// OK, because of structural typing
p = new Person();

// TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。比如：
interface Named1 {
  name: string
}

let x: Named1

let y = {
  name: 'test1',
  location: 'seattle'
}
x = y

// ===============
function greet (n: Named) {
  console.log('Hello, ' + n.name)
}
greet(y)

// 比较两个函数
let xFn = (a: number) => 0;
let yFn = (b: number, s: string) => 0
yFn = xFn
// xFn = yFn  Type '(b: number, s: string) => number' is not assignable to type '(a: number) => number'.

let items = [1, 2, 3]
items.forEach((item, index, array) =>{  // Don't force these extra arguments
  console.log(item)
})
items.forEach(item => console.log(item))

// 下面来看看如何处理返回值类型，创建两个仅是返回值类型不同的函数：
let nFn = () => ({
  name: 'test1'
})
let mFn = () => ({
  name: 'test2',
  location: 'hahahaha'
})

nFn = mFn
// mFn = nFn  Type '() => { name: string; }' is not assignable to type '() => { name: string; location: string; }'.
// Property 'location' is missing in type '{ name: string; }' but required in type '{ name: string; location: string; }'.

// 函数参数双向协变
enum EventType {
  Mouse,
  Keyboard
}

interface Event {
  timestamp: number
}

interface MouseEvent extends Event {
  tx: number;
  ty: number;
}

interface KeyEvent extends Event {
  keyCode: number
}

function listenEvent (eventTpe: EventType, handler: (n: Event) => void) {

}

listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

// listenEvent(EventType.Mouse, (e:Event))