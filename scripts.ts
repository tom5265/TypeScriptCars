/// <reference path="typings/browser.d.ts" />

class Vehicle {
    div: HTMLDivElement;
    damageLimit: number;
    damage: number;

    constructor() {
        this.div = document.createElement('div');
        document.getElementById('vehicles').appendChild(this.div);
        $(this.div).css({
            left: Math.floor(Math.random() * 1200),
            top: Math.floor(Math.random() * 500)
        });
        this.damageLimit = null;
        this.damage = null;
    }

    move() {
        let randomNum = Math.floor(Math.random() * 1200) + 1;
        let randomNumb = Math.floor(Math.random() * 550) + 1;
        $('.car').animate({ 'left': '1200' }, 1000).animate({ 'left': '-20' }, 1000);
        $('.cop-car').animate({ 'top': '550' }, 1000).animate({ 'top': '-20' }, 1000);
        $('.tank').animate({ 'left': '1200' }, 2000).animate({ 'left': '-20' }, 2000);
        $('.motorcycle').animate({ 'left': randomNum, 'top': randomNumb }, 500).animate({ 'left': '-20', 'top': '-5' }, 500);
    }

    damaged() {
        this.damage++;
        if (this.damage == this.damageLimit) {
            this.totaled();
        }
    }

    totaled() {
        this.div.remove();
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.damage = 0;
        this.damageLimit = 2;
        this.div.className = 'car';
        this.div.addEventListener('click', (e) => {
            this.damaged();
        });
    }
}

function addCar() {
    let car = new Car();
    car.move()
    setInterval(function() {
        car.move();
    }, 1000);
}

class CopCar extends Vehicle {
    constructor() {
        super();
        this.damage = 0;
        this.damageLimit = 3;
        this.div.className = 'cop-car';
        this.div.addEventListener('click', (e) => {
            this.damaged();
        });
    }
}

function addCopCar() {
    let copper = new CopCar();
    copper.move();
    setInterval(function() {
        copper.move();
    }, 1000);
}

class Tank extends Vehicle {
    constructor() {
        super();
        this.damage = 0;
        this.damageLimit = 10;
        this.div.className = 'tank';
        this.div.addEventListener('click', (e) => {
            this.damaged();
        });
    }
}

function addTank() {
    let tanky = new Tank();
    tanky.move();
    setInterval(function() {
        tanky.move();
    }, 2000);
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.damage = 0;
        this.damageLimit = 1;
        this.div.className = 'motorcycle';
        this.div.addEventListener('click', (e) => {
            this.damaged();
        });
    }
}

function addMotorcycle() {
    let cycle = new Motorcycle();
    cycle.move();
    setInterval(function() {
        cycle.move();
    }, 1000);
}

$(document).ready(function() {
    $('.add-car').click(function() {
        addCar();
    });
    $('.add-cop').click(function() {
        addCopCar();
    })
    $('.add-tank').click(function() {
        addTank();
    })
    $('.add-motorcycle').click(function() {
        addMotorcycle();
    });
})