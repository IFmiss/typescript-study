var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
    }
    return Student;
}());
function greeter(person) {
    return person.firstName + '---' + person.lastName;
}
var user = new Student('戴', '-', '伟');
document.body.innerHTML = greeter(user);
