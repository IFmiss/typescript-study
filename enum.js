// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Right);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
var Responsed;
(function (Responsed) {
    Responsed[Responsed["No"] = 0] = "No";
    Responsed[Responsed["Yes"] = 1] = "Yes";
})(Responsed || (Responsed = {}));
function responsed(recipient, message) {
    console.log(recipient, message);
}
responsed("Princess Caroline", Responsed.Yes);
// 字符串枚举
// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
var DirectionString;
(function (DirectionString) {
    DirectionString["UP"] = "UP";
    DirectionString["DOWN"] = "DOWN";
    DirectionString["LEFT"] = "LEFT";
    DirectionString["RIGHT"] = "RIGHT";
})(DirectionString || (DirectionString = {}));
console.log(DirectionString.RIGHT);
// 异构枚举（Heterogeneous enums）.
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["NO"] = 0] = "NO";
    BooleanLikeHeterogeneousEnum["YES"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// 计算的和常量成员
// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
console.log(E.X);
// 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
console.log(E1);
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
console.log(E2);
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
// 联合枚举与枚举成员的类型
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 100
};
console.log(c);
// 联合。
var E3;
(function (E3) {
    E3[E3["Foo"] = 0] = "Foo";
    E3[E3["Bar"] = 1] = "Bar";
})(E3 || (E3 = {}));
// function f (x: E3) {
//   if (x != E3.Foo || x != E3.Bar) { // This condition will always return 'true' since the types 'E3.Foo' and 'E3.Bar' have no overlap.
//     console.log('emmmm')
//   }
// }
// 运行时的枚举
var E4;
(function (E4) {
    E4[E4["X"] = 0] = "X";
    E4[E4["Y"] = 1] = "Y";
    E4[E4["Z"] = 2] = "Z";
})(E4 || (E4 = {}));
function f1(obj) {
    return obj.X;
}
f1(E4);
// 反向映射
// 除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 例如，在下面的例子中：
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a];
console.log(nameOfA);
var direction = [0 /* UP */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(direction);
console.log(Enum2);
