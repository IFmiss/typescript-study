var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
// OK, because of structural typing
p = new Person();
var x;
var y = {
    name: 'test1',
    location: 'seattle'
};
x = y;
// ===============
function greet(n) {
    console.log('Hello, ' + n.name);
}
greet(y);
// 比较两个函数
var xFn = function (a) { return 0; };
var yFn = function (b, s) { return 0; };
yFn = xFn;
// xFn = yFn  Type '(b: number, s: string) => number' is not assignable to type '(a: number) => number'.
var items = [1, 2, 3];
items.forEach(function (item, index, array) {
    console.log(item);
});
items.forEach(function (item) { return console.log(item); });
// 下面来看看如何处理返回值类型，创建两个仅是返回值类型不同的函数：
var nFn = function () { return ({
    name: 'test1'
}); };
var mFn = function () { return ({
    name: 'test2',
    location: 'hahahaha'
}); };
nFn = mFn;
mFn = nFn;
