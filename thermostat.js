class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true;
    }

    togglePsm() {
        if(this.powerSavingMode === true) {
            this.powerSavingMode = false;
        } else {
            this.powerSavingMode = true;
        }
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if(this.powerSavingMode === true 
            && this.temperature < 25) {
            this.temperature += 1;
        }
        else if(this.powerSavingMode === false
            && this.temperature < 32) {
                this.temperature += 1;
        };
    }

    down() {
        if(this.temperature >= 10) {
            this.temperature -= 1;
        }
    }

    reset() {
        this.temperature = 20;
    }
}

module.exports = Thermostat;