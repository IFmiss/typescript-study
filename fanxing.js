// 不用泛型的话，这个函数可能是下面这样：
function identity(arg) {
    return arg;
}
// 或者，我们使用any类型来定义函数：
function identity1(arg) {
    return arg;
}
// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity2(arg) {
    return arg;
}
var output = identity2('daiwei');
var output1 = identity2('daiwei');
// 使用泛型变量
function loggerIdentity(arg) {
    // console.log(arg.length)   // Property 'length' does not exist on type 'T'.
    return arg;
}
function loggerIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
