function SwitchButton() {
    this.status = 'off';
    this.switchOff = function () {
        this.status = 'off';
    };
    this.switchOn = function () {
        this.status = 'on';
    };
    this.connectToLamp = function (lamp) {
        lamp.status = this.status;
    };
}

function ElectricLamp() {
    this.status = 'off';
    this.turnOff = function () {
        this.status = 'off';
    };
    this.turnOn = function () {
        this.status = 'on';
    };
}

let switchLamp = new SwitchButton();
let lamp = new ElectricLamp();

function turnOnOff() {
    if (switchLamp.status==='on') {
        switchLamp.switchOff();
        switchLamp.connectToLamp(lamp);
        console.log(lamp.status);
        document.getElementById("ElectricLamp").innerHTML="Lamp is off!!!"
    } else {
        switchLamp.switchOn();
        switchLamp.connectToLamp(lamp);
        console.log(lamp.status);
        document.getElementById("ElectricLamp").innerHTML="Lamp is on"
    }
}