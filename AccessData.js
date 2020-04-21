class AccessData {

    flightType = new Array();
    flightTime = new Array();

    constructor() {
    }
    // looks through the sourcecode of the website and extracts the string text in the "planeDetails details-subheading"
    // where the plane information is stored.
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
                this.flightTime.push(y.innerText);

            }
        }
        for (let i = 0; i < this.flightTime.length; i++) {
            console.log(this.flightTime[i]);
        }
    }
}
