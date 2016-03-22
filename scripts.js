/// <reference path="typings/browser.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
        this.div = document.createElement('div');
        document.getElementById('vehicles').appendChild(this.div);
        $(this.div).css({
            left: Math.floor(Math.random() * 1200),
            top: Math.floor(Math.random() * 500)
        });
        this.damageLimit = null;
        this.damage = null;
    }
    Vehicle.prototype.move = function () {
        var randomNum = Math.floor(Math.random() * 1200) + 1;
        var randomNumb = Math.floor(Math.random() * 550) + 1;
        $('.car').animate({ 'left': '1200' }, 1000).animate({ 'left': '-20' }, 1000);
        $('.cop-car').animate({ 'top': '550' }, 1000).animate({ 'top': '-20' }, 1000);
        $('.tank').animate({ 'left': '1200' }, 2000).animate({ 'left': '-20' }, 2000);
        $('.motorcycle').animate({ 'left': randomNum, 'top': randomNumb }, 500).animate({ 'left': '-20', 'top': '-5' }, 500);
    };
    Vehicle.prototype.damaged = function () {
        this.damage++;
        if (this.damage == this.damageLimit) {
            this.totaled();
        }
    };
    Vehicle.prototype.totaled = function () {
        this.div.remove();
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = this;
        _super.call(this);
        this.damage = 0;
        this.damageLimit = 2;
        this.div.className = 'car';
        this.div.addEventListener('click', function (e) {
            _this.damaged();
        });
    }
    return Car;
}(Vehicle));
function addCar() {
    var car = new Car();
    car.move();
    setInterval(function () {
        car.move();
    }, 1000);
}
var CopCar = (function (_super) {
    __extends(CopCar, _super);
    function CopCar() {
        var _this = this;
        _super.call(this);
        this.damage = 0;
        this.damageLimit = 3;
        this.div.className = 'cop-car';
        this.div.addEventListener('click', function (e) {
            _this.damaged();
        });
    }
    return CopCar;
}(Vehicle));
function addCopCar() {
    var copper = new CopCar();
    copper.move();
    setInterval(function () {
        copper.move();
    }, 1000);
}
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = this;
        _super.call(this);
        this.damage = 0;
        this.damageLimit = 10;
        this.div.className = 'tank';
        this.div.addEventListener('click', function (e) {
            _this.damaged();
        });
    }
    return Tank;
}(Vehicle));
function addTank() {
    var tanky = new Tank();
    tanky.move();
    setInterval(function () {
        tanky.move();
    }, 2000);
}
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        var _this = this;
        _super.call(this);
        this.damage = 0;
        this.damageLimit = 1;
        this.div.className = 'motorcycle';
        this.div.addEventListener('click', function (e) {
            _this.damaged();
        });
    }
    return Motorcycle;
}(Vehicle));
function addMotorcycle() {
    var cycle = new Motorcycle();
    cycle.move();
    setInterval(function () {
        cycle.move();
    }, 1000);
}
$(document).ready(function () {
    $('.add-car').click(function () {
        addCar();
    });
    $('.add-cop').click(function () {
        addCopCar();
    });
    $('.add-tank').click(function () {
        addTank();
    });
    $('.add-motorcycle').click(function () {
        addMotorcycle();
    });
});
