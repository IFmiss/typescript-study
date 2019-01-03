// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function interFaceLabel(obj) {
    console.log(obj.label);
}
interFaceLabel(myObj);
function createSquare(config) {
    var newSqure = { color: 'white', area: 10 };
    if (config.color)
        newSqure.color = config.color;
    if (config.width)
        newSqure.area = config.width * config.width;
    return newSqure;
}
var mySquare = createSquare({ color: 'red' });
var p1 = {
    x: 10,
    y: 20
};
// p1.x = 5
// Cannot assign to 'x' because it is a read-only property.
// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12
// Index signature in type 'ReadonlyArray<number>' only permits reading.
// a = ro  也不可以
// 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
a = ro;
// let mySearch: SearchFunc
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString)
//   return result > -1
// }
// 函数的参数名不需要与接口里定义的名字相匹配。
// let mySearch: SearchFunc
// mySearch = function (src: string, sub: string) : boolean {
//   let result = src.search(sub)
//   return result > -1
// }
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量
var mySearch;
mySearch = function (src, lib) {
    var result = src.search(lib);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var myArrayInfo = ["daiwei", 'other'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var MClock = /** @class */ (function () {
    function MClock(h, m) {
    }
    MClock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return MClock;
}());
