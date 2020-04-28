class AccessData {

    flightType = new Array();
    flightTime = new Array();


    constructor() {
    }
    // looks through the sourcecode of the website and extracts the string text in the "planeDetails details-subheading"
    // where the plane information is stored.


    resultWrapperFlightTime(num) {
        const wrapperTime = new Array();
        let wrapper = document.getElementsByClassName("resultWrapper")[num];
        for (let j = 0; j < wrapper.getElementsByClassName("planeDetails details-subheading").length; j++) {
            const y = wrapper.getElementsByClassName("segmentDuration text-row")[j];
            //this.flightTime.push(y.innerText);
            let split = y.innerText.split(" ");
            if (split.length >1){
                this.flightTime.push(parseInt(split[0])*60+parseInt(split[1]));

            }
            else {
                wrapperTime.push(parseInt(y.innerText));

            }
        }
        for (let i = 0; i < this.flightTime.length; i++) {
            console.log(wrapperTime[i]);
        }
        return wrapperTime;
    }

    




    setFlightType() {
        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
            let x = document.getElementsByClassName("resultWrapper")[i];
            for (let j = 0; j < x.getElementsByClassName("planeDetails details-subheading").length; j++) {
                const y = x.getElementsByClassName("planeDetails details-subheading")[j];
                let split = y.innerText.split("·");
                this.flightType.push(split[2]);

            }
        }
        for (let i = 0; i < this.flightType.length; i++) {
            console.log(this.flightType[i]);
        }
    }
    // looks through the sourcecode of the website and extracts the string text in the "segmentDuration text-row"
    // containing the flight durations.



    setFlightTime() {
        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
            let x = document.getElementsByClassName("resultWrapper")[i];
            for (let j = 0; j < x.getElementsByClassName("planeDetails details-subheading").length; j++) {
                const y = x.getElementsByClassName("segmentDuration text-row")[j];
                //this.flightTime.push(y.innerText);
                let split = y.innerText.split(" ");
                if (split.length >1){
                this.flightTime.push(parseInt(split[0])*60+parseInt(split[1]));

                }
                else {
                    this.flightTime.push(parseInt(y.innerText));

                }
            }
            for (let i = 0; i < this.flightTime.length; i++) {
                console.log(this.flightTime[i]);
            }
        }

        /* eksempel for udregnet flyrejse mellem cph og frankfurt med en  Embraer 190
        for (let i = 0; i < this.flightTime.length; i++) {
            let a = 3.16 * ((44.7*this.flightTime[i]) * 0.8)/((95)*(0.95));
            console.log("The flight with" +this.flightType[i]+ "equals to "+a+"kg of c02 per passenger")
        }*/
    }
}
