var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeting = new Greeter('world');
// 继承
// class Animal {
//   move (distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m`)
//   }
// }
// class Dog extends Animal {
//   bark () {
//     console.log('woof! woof!')
//   }
// }
// const dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()
// 复杂的例子
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distace) {
        if (distace === void 0) { distace = 0; }
        console.log(this.name + " moved " + distace + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distace) {
        if (distace === void 0) { distace = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distace);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distace) {
        if (distace === void 0) { distace = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distace);
    };
    return Horse;
}(Animal));
var sam = new Snake('sammy the python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// 公共，私有与受保护的修饰符
var AnimalV1 = /** @class */ (function () {
    function AnimalV1(theName) {
        this.name = theName;
    }
    AnimalV1.prototype.move = function (dis) {
        console.log(this.name + " moved " + dis + "m.");
    };
    return AnimalV1;
}());
var AnimalV2 = /** @class */ (function () {
    function AnimalV2(theName) {
        this.name = theName;
    }
    return AnimalV2;
}());
// new AnimalV2('cat').name
// Property 'name' is private and only accessible within class 'AnimalV2'.
var AnimalV3 = /** @class */ (function () {
    function AnimalV3(theName) {
        this.name = theName;
    }
    return AnimalV3;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(AnimalV3));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new AnimalV3("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee 'Employee' is not assignable to type 'AnimalV3'. Types have separate declarations of a private property 'name'.
// 理解 protected 修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee1;
}(Person));
var howard = new Employee1('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name) 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
// Employee2 能够继承 Person1
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person1));
var howard1 = new Employee2('Howard', 'Sales');
// let join = new Person1('John') // 错误: 'Person1' 的构造函数是被保护的.
// readonly修饰符
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Man with the 3-prece suit'   错误  name  是只读的
// 参数属性
var Octopus1 = /** @class */ (function () {
    function Octopus1(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus1;
}());
// 存取器  TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。 下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
employee3.fullName && console.log(employee3.fullName);
// 拦截get 和 setter
var passcode = "secret passcode";
var Employee4 = /** @class */ (function () {
    function Employee4() {
    }
    Object.defineProperty(Employee4.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee4;
}());
var employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
    alert(employee4.fullName);
}
// 静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calc = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
// 抽象类
var Animal4 = /** @class */ (function () {
    function Animal4() {
    }
    Animal4.prototype.moveBy = function () {
        console.log('roaming the earch...');
    };
    return Animal4;
}());
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this; // 在派生类的构造函数中必须调用 super()
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
