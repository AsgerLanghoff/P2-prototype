var testResults = new Array(); //Since we can not use static variables in javaScript, we made this array global .



class CO2calculator {

    wrapperResults = new Array();
    finalResult;
    index;


    //Calculates the C02 emission based on the ICAO calculation. The missing variables will be loaded from the dataset.


    calculator(num) {
        let wrapper = document.getElementsByClassName("resultWrapper")[num];
        let accessData = new AccessData();
        let dataBase = new Database();
        accessData.resultWrapperFlightType(num);
        accessData.resultWrapperFlightTime(num);
        for (let i = 0; i < wrapper.getElementsByClassName("planeDetails details-subheading").length; i++) {
            let type = accessData.getOneFlightType(i);
            let time = accessData.getOneFlightTime(i);
            let seats = dataBase.getNumberOfYSeats(type);
            let load = dataBase.getLoadFactor(type);
            let consumption = dataBase.getFuelConsumption(type, time);
            let freight = dataBase.getFreightFactor();

            let x = consumption * freight;
            let y = seats * load;
            let x_dividedBy_y = x/y;


            let flightEmission = 3.16 * x_dividedBy_y;
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
        this.finalResult = sum;
        this.storeToTestResults(sum);
        this.resetArray();
        return sum;
    }

    storeToTestResults(TotalEmission) {
        testResults.push(TotalEmission);
    }

    resetArray(){
        this.wrapperResults = [];
    }

    constructor(num) {
        this.calculator(num);
        this.index = num;
    }
}