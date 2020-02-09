interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named
p = new Person()

let x: Named
let y = {name: 'Alice', location: 'Seattle'}
x = y

function greet (n: Named) {
  alert(`hello: ${n.name}`)
}
greet({name: 'daiwei'})


let fnX = (a: number) => 0
let fnY = (a: number, s: string) => 0

fnY = fnX
// fnX = fnY

let items = [1, 2, 3]
items.forEach(item => console.log(item))

function invokeLater(args: Array<any>, callBack: (...args: Array<any>) => void) {
  console.log('args', args)
  console.log('callBack', callBack)
}

invokeLater([1, 2, 3], (x, y) => { console.log('x & y', x, y) })
