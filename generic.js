function identity(arg) {
    return arg;
}
function ide(arg) {
    return arg;
}
var a = ide(1);
var output = ide("myString");
// 使用泛型变量
function longIde(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型类型
var myIde = ide;
var myNewIde = ide;
var sfIde = ide;
var sfA = sfIde(1);
var GNumber = /** @class */ (function () {
    function GNumber() {
    }
    return GNumber;
}());
var myIdeGN = new GNumber();
myIdeGN.zv = 1;
myIdeGN.add(2.3, 4);
