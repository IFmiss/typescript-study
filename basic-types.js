// 基本类型
var isDone = false;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
var list = [1, 2, 3];
var list1 = [1, 2, 3];
var x = ['hello', 10];
var TypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["TEST"] = 0] = "TEST";
    TypeEnum[TypeEnum["DEV"] = 1] = "DEV";
    TypeEnum[TypeEnum["PROD"] = 2] = "PROD";
})(TypeEnum || (TypeEnum = {}));
var env = TypeEnum.TEST;
var noSure = [3];
noSure = ['st'];
function warn() {
    console.log('warning');
}
var u = undefined;
var n = null;
var un = undefined;
var never = function () {
    throw new Error('1231');
};
var someValue = "this is a string";
var a = someValue.toLocaleUpperCase();
var b = someValue.toLocaleUpperCase();
