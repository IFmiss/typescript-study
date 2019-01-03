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
animal = employee;
