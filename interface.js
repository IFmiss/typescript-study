function myGreeter(person) {
    return person.firstName + '---' + person.lastName;
}
var data = {
    firstName: '戴',
    lastName: '伟'
};
document.body.innerHTML = myGreeter(data);
