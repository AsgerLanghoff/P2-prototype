class Database {

    LIST_OF_PLANES = ["Boeing 737-800", "Boeing 737-700", "Airbus A320", "Airbus A321", "Boeing 757-200", "Airbus A319", "Boeing 737-900ER", "Embraer E175", "Bombardier CRJ900", "Bombardier CRJ700"]; //List of the most used Aircrafts http://www.fi-aeroweb.com/US-Commercial-Aircraft-Fleet.html

    LIST_OF_DISTANCE = [125, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500]; //Nautical Miles. This distance is in nautical miles.

    FUEL_CONSUMPTION = [
       /*Boeing 737-800*/ [1715, 3494, 4621, 6221, 7749, 10666, 13460, 16170, 18818, 21415, 23972], //This line corresponds to LIST_OF_PLANES[0], aka "Boeing 737-800". The numbers are pulled from https://www.icao.int/environmental-protection/CarbonOffset/Documents/Methodology%20ICAO%20Carbon%20Calculator_v10-2017.pdf
        /*Boeing 737-700*/ [1586, 3202, 4173, 5570, 6895, 9410, 11804, 14113, 16360, 18558, 20715],
        /*Airbus A320*/ [1672, 3430, 4585, 6212, 7772, 10766, 13648, 16452],
        /*Airbus A321 */ [1909, 3925, 5270, 7157, 8970, 12456, 15818, 19094, 22308],
        /*Boeing 757-200*/ [2159, 4435, 5939, 8054, 10085, 13984, 17740, 21398, 24983, 28159],
        /*Airbus A319*/[1596, 3259, 4323, 5830, 7271, 10026, 12668, 15233, 17741, 20203],
        /*Boeing 737-900ER*/ [1782, 3641, 4839, 6533, 8154, 11255, 14233, 17125, 19954, 22733, 25471],
        /*Embraer E175*/ [1113, 2240, 2989, 3953, 4890, 6725], //Embraer har koden E7W, som svarer til E75 i ICAOs Equivalent Aircraft Mapping
        /*Bombardier CRJ900*/ [1119, 2251, 2994, 3949, 4872, 6664],
        /*Bombardier CRJ700*/ [1043, 2092, 2772, 3642, 4475, 6076],

    ];

    FUEL_CONSUMPTION_OTHER = [1672, 3430, 4585, 6212, 7772, 10766, 13648, 16452, 45056, 51831, 58678, 65621, 72666, 79159, 85687, 89019, 91982, 94586, 96840, 98752]; // In reality, these number can vary +- 20'000...

    NUMBER_OF_Y_SEATS = [162, 141, 96, 176, 200, 160, 177, 90, 68]; //The position in this array corresponds to LIST_OF_PLANES. Y_Seats = economy seats
    NUMBER_OF_Y_SEATS_OTHER = 165 ; //This number is open for discussion

    PAX_LOAD_FACTOR = 80; //This number is open for discussion

    PAX_TO_FREIGHT_FACTOR = 96; //This number is open for discussion

    KM_PER_HOUR = [842, 828, 840, 833, 850, 828, 925, 830, 829 ]; ////The position in this array corresponds to LIST_OF_PLANES. Enter the cruise speed of the aircraft
    KM_PER_HOUR_OTHER = 850;


    constructor() {
    }

    getListOfPlanesIndex(plane) {
        return this.LIST_OF_PLANES.indexOf(plane);
    }

    getListOfDistanceAsKm(index) {
        return this.LIST_OF_DISTANCE[index] * 1.852;
    }

    getFuelConsumption(flightType, flightTime) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        let closestNum = 0;
        let currentNum;
        let closestIndex;
        for (let i = 0; i < this.LIST_OF_DISTANCE.length; i++) {
            let KM = this.getKMPerHour(a);
            let dist = this.getListOfDistanceAsKm(i);
            currentNum = (flightTime/60)*KM - dist;
            currentNum = Math.abs(currentNum);
            if (currentNum < closestNum || i == 0) {
                closestNum = currentNum;
                closestIndex = i -1;//-1 for adjusting the number. THIS MIGHT CHANGE
                console.log("index"+closestIndex);
            }
        }

        if (a != -1) {
            return this.FUEL_CONSUMPTION[a][closestIndex];
        } else {
            return this.getFuelConsumptionOther(flightTime);
        }
    }

    getFuelConsumptionOther(flightTime) {
        let closestNum = 0;
        let currentNum;
        let closestIndex;
        for (let i = 0; i < this.LIST_OF_DISTANCE.length; i++) {
            let KM = this.getKMPerHourOther();
            let dist = this.getListOfDistanceAsKm(i);
            currentNum = (flightTime/60)*KM - dist;
            currentNum = Math.abs(currentNum);
            if (currentNum < closestNum || i == 0) {
                closestNum = currentNum;
                closestIndex = i -1; //-1 for adjusting the number. THIS MIGHT CHANGE
            }
        }
        return this.FUEL_CONSUMPTION_OTHER[closestIndex];
    }

    getNumberOfYSeats(flightType) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        if (a != -1) {
            return this.NUMBER_OF_Y_SEATS[a];
        } else {
            return this.getNumberOfYSeatsOther();
        }
    }

    getNumberOfYSeatsOther() {
        return this.NUMBER_OF_Y_SEATS_OTHER;
    }

    getFreightFactor() {
        return this.PAX_TO_FREIGHT_FACTOR;
    }

    getLoadFactor() {
        return this.PAX_LOAD_FACTOR;
    }


    getKMPerHour(flightType) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        if (a != -1) {
            return this.KM_PER_HOUR[a];
        } else {
           return this.getKMPerHourOther()
        }
    }

    getKMPerHourOther() {
        return this.KM_PER_HOUR_OTHER;
    }
}