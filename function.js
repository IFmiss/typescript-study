function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd1 = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
// 可选参数和默认参数
function buildName(firstName, lastName) {
    return firstName + ' - ' + lastName;
}
// let result1 = buildName('bob') error, too few parameters
// let result2 = buildName('bob', 'adams', 'sr.') error, too many parameters
var result3 = buildName('bob', 'name');
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + ' - ' + lastName;
    else
        return firstName;
}
var result4 = buildName1("Bob");
// let result5 = buildName("Bob", "Adams", "Sr.")  Expected 2 arguments, but got 3.
var result6 = buildName1("Bob", "Adams");
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result7 = buildName2("Bob");
var result8 = buildName2("Bob", undefined);
// let result9 = buildName2("Bob", "Adams", "Sr.")
var result10 = buildName2("Bob", "Adams");
// 剩余参数
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
