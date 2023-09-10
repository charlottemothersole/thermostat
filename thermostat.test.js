const Thermostat = require('./thermostat.js');

describe('testing thermostat class and methods', () => {
    const thermostat = new Thermostat();
    it('starts with 20c', () => {
        expect(thermostat.temperature).toBe(20);
    });
    it('increase temp by 1 with up()', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.temperature).toBe(22);
    });
    it('decrease temp by 1 with down()', () => {
        thermostat.down();
        expect(thermostat.temperature).toBe(21);
    });
    it('starts with powerSavingMode on', () => {
        expect(thermostat.powerSavingMode).toBe(true);  
    });
    it('cant increase past 25 with PSM on', () => {
        expect(thermostat.temperature).toBe(21);
        expect(thermostat.powerSavingMode).toBe(true);  
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25);
    });
    it('cant increase past 32 with PSM off', () => {
        expect(thermostat.temperature).toBe(25);
        thermostat.togglePsm();  
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32);
    });
    it('can reset temp to 20c', () => {
        expect(thermostat.temperature).toBe(32);  
        thermostat.reset();
        expect(thermostat.temperature).toBe(20); 
    });
})

// Why didnt .toBe(True) work (returned ReferenceError: True is not defined)

// Should tests be written to follow on from the previous test or as if a new instance each time?
