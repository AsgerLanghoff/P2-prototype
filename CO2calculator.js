var testResults = new Array();


class CO2calculator {

    calculator(flightType, flightTime) {
        let a = (getFuelConsumption(flightType, flightTime) * getFreightFactor()) / (getYSeats(flightType) * getLoadFactor(flightType));
        testResults.push(a);
        return a;
    }

    calculator(flightTime) {
        let a = (getFuelConsumption(flightTime) * getFreightFactor()) / (getYSeats() * getLoadFactor());
        testResults.push(a);
        return a;
    }

    clearResults() {
        testResults = [];
    }


    constructor() {
    }


}