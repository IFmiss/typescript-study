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
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var interfaceA = {
    a: '2we',
    name: '1',
    age: 12,
    c: [12, 3]
};
// interfaceA.a = 1
interfaceA.age = 20;
interfaceA.c = [1, 2];
interfaceA.c.length;
var interfaceVal = [1, 2, 3, 4];
var ro = interfaceVal;
ro.length;
function createSquare(config) {
    return {
        color: '1',
        area: 1
    };
}
var mySquare = createSquare({ colour: "red", width: 100 });
var mySearch = function (sourse, sub) {
    return false;
};
var stringA = ['111', '2222'];
var stringStr = stringA[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var arr = ['qw', '2'];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var sqera = {};
sqera.color = '#000';
sqera.num = 1;
sqera.penWidth = 2;
var Ctrl = /** @class */ (function () {
    function Ctrl() {
    }
    return Ctrl;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Ctrl));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Ctrl));
var tb = new TextBox();
tb.prop = 2;
var IImage = /** @class */ (function (_super) {
    __extends(IImage, _super);
    function IImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IImage.prototype.select = function () { };
    return IImage;
}(Ctrl));
var im = new IImage();
im.prop = 3;
var Bs = /** @class */ (function (_super) {
    __extends(Bs, _super);
    function Bs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bs.prototype.select = function () { };
    return Bs;
}(Ctrl));
