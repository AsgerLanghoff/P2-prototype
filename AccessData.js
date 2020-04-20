class AccessData {

    flightType = new Array();
    flightTime = new Array();

    constructor() {
    }

    setFlightType() {
        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
            let x = document.getElementsByClassName("resultWrapper")[i];
            for (let j = 0; j < x.getElementsByClassName("planeDetails details-subheading").length; j++) {
                const y = x.getElementsByClassName("planeDetails details-subheading")[j];
                for (let i = 0; i < y.length; i++) {
                    let split = y[i].split("·");
                    this.flightType.push(split[2]);

                }

            }
        }

        for(let i = 0; i < this.flightType.length; i++) {
            console.log(this.flightType[i]);
        }
    }
}

/*
for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
    let x = document.getElementsByClassName("resultWrapper")[i];
    for (let j = 0; j < x.getElementsByClassName("planeDetails details-subheading").length; j++) {
        let y = x.getElementsByClassName("planeDetails details-subheading")[j];
        let z = x.getElementsByClassName("segmentDuration text-row")[j];
        console.log(y.innerText);
        console.log(z.innerText);
    }

    console.log("next plane");

    */
