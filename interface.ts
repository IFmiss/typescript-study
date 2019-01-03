// 接口
interface Person {
  firstName: string,
  lastName: string
}

function myGreeter (person: Person) {
  return person.firstName + '---' + person.lastName
}

let data = {
  firstName: '戴',
  lastName: '伟'
}

document.body.innerHTML = myGreeter (data)
