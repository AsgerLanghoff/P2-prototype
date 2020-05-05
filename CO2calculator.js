var testResults = new Array(); //Since we can not use static variables in javaScript, we made this array global .


class CO2calculator {

    wrapperResults = new Array();



    //Calculates the C02 emission based on the ICAO calculation. The missing variables will be loaded from the dataset.
     calculator(num) {
         let wrapper = document.getElementsByClassName("resultWrapper")[num];
         let accessData = new AccessData();
         accessData.resultWrapperFlightType(num);
         accessData.resultWrapperFlightTime(num);
         for (let i = 0; i < wrapper.getElementsByClassName("planeDetails details-subheading").length; i++) {
             let dataBase = new Database();
             let flightEmission = 3.16 * ((dataBase.getFuelConsumption(accessData.getOneFlightType(i), accessData.getOneFlightTime(i)) * dataBase.getFreightFactor()) / (dataBase.getNumberOfYSeats(accessData.getOneFlightType(i)) * dataBase.getLoadFactor(accessData.getOneFlightType(i))));
             this.wrapperResults.push(flightEmission);
         }
         this.findTotalResult();
    }


    //This function clears the "testResutls" array

    clearResults() {
        testResults = [];
    }


    //Returns the result as string
    findTotalResult() {
         let sum = 0;
         for (let i = 0; i < this.wrapperResults.length; i++) {
             sum = sum + this.wrapperResults[i];
         }
         this.storeToTestResults(sum);
         return sum.toString();
    }

    storeToTestResults(TotalEmission) {
         testResults.push(TotalEmission);
    }


    constructor(num) {
         this.calculator(num);
    }
}