class Student {
  fullName: string
  constructor (
    public firstName,
    public middleInitial,
    public lastName
  ) {
    this.fullName = this.firstName + ' ' + this.middleInitial + ' ' + this.lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter (person: Person) {
  return person.firstName + '---' + person.lastName
}

let user = new Student('戴', '-', '伟')

document.body.innerHTML = greeter(user)
