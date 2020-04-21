var testResults = new Array(); //Since we can not use static variables in javaScript, we made this array global .


class CO2calculator {


    //Calculates the C02 emission based on the ICAO calculation. The missing variables will be loaded from the dataset.
    calculator(flightType, flightTime) {
        let a = (getFuelConsumption(flightType, flightTime) * getFreightFactor()) / (getYSeats(flightType) * getLoadFactor(flightType));
        testResults.push(a);
        return a;
    }

    //If we dont have the available data for a specific flight type, we can use this function without a flight type.
    calculator(flightTime) {
        let a = (getFuelConsumption(flightTime) * getFreightFactor()) / (getYSeats() * getLoadFactor());
        testResults.push(a);
        return a;
    }

    //This function clears the "testResutls" array
    clearResults() {
        testResults = [];
    }


    constructor() {
    }


}