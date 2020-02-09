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
var CAnimal = /** @class */ (function () {
    function CAnimal() {
    }
    CAnimal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log('move instance: ', distanceInMeters);
    };
    return CAnimal;
}());
var CDog = /** @class */ (function (_super) {
    __extends(CDog, _super);
    function CDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CDog.prototype.bark = function () {
        console.log('bark');
    };
    return CDog;
}(CAnimal));
var dog = new CDog();
dog.bark();
dog.move();
dog.bark();
var DAnimal = /** @class */ (function () {
    function DAnimal(name) {
        this.name = name;
    }
    DAnimal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("move: ---->  " + distanceInMeters);
    };
    return DAnimal;
}());
var DDog = /** @class */ (function (_super) {
    __extends(DDog, _super);
    function DDog(name) {
        return _super.call(this, name) || this;
    }
    DDog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('DDog move', distanceInMeters);
        _super.prototype.move.call(this, distanceInMeters);
    };
    return DDog;
}(DAnimal));
var DMiao = /** @class */ (function (_super) {
    __extends(DMiao, _super);
    function DMiao(name) {
        return _super.call(this, name) || this;
    }
    DMiao.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('DMiao move', distanceInMeters);
        _super.prototype.move.call(this, distanceInMeters);
    };
    return DMiao;
}(DAnimal));
var sam = new DDog('sam is a dog');
var tom = new DMiao('tom is a cat');
sam.move();
tom.move(34);


