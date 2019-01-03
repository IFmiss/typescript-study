// bool
var isDone = false;
// 数字
var decL = 6;
var hexL = 0xf00d;
var binL = 10;
var octL = 508;
// 字符串
var myname = 'dw';
myname = 'daiwei';
var iname = "Daiwei";
var age = 25;
var disc = "my name is " + iname + ", i will be " + (age + 1) + " years old next year";
// 数组
var list = [1, 2, 4];
var list1 = [1, 2, 3];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['hi', 1];
// 枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(colorName);
// Any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure.ifItExists();
notSure.toFixed();
var mylist = [1, true, 'free'];
mylist[1] = 100;
// void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    console.log("This is my warning message");
}
// Null 和 Undefined
var u = undefined;
var n = null;
// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
function error(message) {
    throw new Error(message);
}
create({ prop: 0 });
create(null);
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var strl = someValue.length;
