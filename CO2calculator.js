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
            //console.log("type" + type);
            let time = accessData.getOneFlightTime(i);
           // console.log("time" + time);
            let seats = dataBase.getNumberOfYSeats(type);
          //  console.log("seats" + seats);
            let load = dataBase.getLoadFactor(type);
           // console.log("load"+load);
            let consumption = dataBase.getFuelConsumption(type, time);
            console.log("consumption"+consumption);
            let freight = dataBase.getFreightFactor();
          //  console.log("freight"+freight);

            let x = consumption * freight;
            console.log("x = " +x);
            let y = seats * load;
            console.log("y = " + y);
            let x_dividedBy_y = x/y;
            console.log("x_dividedBy_y = "+ x_dividedBy_y);


            let flightEmission = 3.16 * x_dividedBy_y;
            console.log("emissionwrapper" +i+ flightEmission);
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