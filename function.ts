function add (x: number, y: number): number {
  return x + y
}

let myAdd = function (x: number, y: number) :number {
  return x + y
}

let myAdd1: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

let myAdd2: (baseValue: number, increment: number) => number = function (x, y): number {
  return x + y
}

// 可选参数和默认参数
function buildName (firstName: string, lastName: string) {
  return firstName + ' - ' + lastName
}

// let result1 = buildName('bob') error, too few parameters
// let result2 = buildName('bob', 'adams', 'sr.') error, too many parameters
let result3 = buildName('bob', 'name')

function buildName1 (firstName: string, lastName?: string) {
  if (lastName) 
    return firstName + ' - ' + lastName
  else
    return firstName
}

let result4 = buildName1("Bob")
// let result5 = buildName("Bob", "Adams", "Sr.")  Expected 2 arguments, but got 3.
let result6 = buildName1("Bob", "Adams")

function buildName2 (firstName: string, lastName: = "Smith") {
  return firstName + " " + lastName
}

let result7 = buildName2("Bob")
let result8 = buildName2("Bob", undefined)
// let result9 = buildName2("Bob", "Adams", "Sr.")
let result10 = buildName2("Bob", "Adams")

// 剩余参数
function buildName3 (firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie")
