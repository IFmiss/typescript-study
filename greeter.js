// 构建你的第一个TypeScript文件
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
function myGreeter(person) {
    return person.fristName + '---' + person.lastName;
}
var data = {
    fristName: '戴',
    lastName: '伟'
};
document.body.innerHTML = myGreeter(data);
