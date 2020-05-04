var testResults = new Array(); //Since we can not use static variables in javaScript, we made this array global .


class CO2calculator {



    //Calculates the C02 emission based on the ICAO calculation. The missing variables will be loaded from the dataset.
     calculator(flightType, flightTime, num) {
         let dataBase = new Database();
        let a = 3.16 * ((dataBase.getFuelConsumption(flightType, flightTime) * dataBase.getFreightFactor()) / (dataBase.getNumberOfYSeats(flightType) * dataBase.getLoadFactor(flightType)));
        testResults.push(a);
         this.getTestResultAsString(num);
    }

    getTestResultAsString(num) {
        let result = testResults[num].toString();
        return result;
    }


    //This function clears the "testResutls" array
    clearResults() {
        testResults = [];
    }


    constructor() {
    }


}