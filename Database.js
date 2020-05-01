class Database {

    LIST_OF_PLANES = ["Boeing 737-800", 0, 0];

    LIST_OF_DISTANCE = [125, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500]; //Nautical Miles. This distance is in nautical miles.

    FUEL_CONSUMPTION = [
        [1715, 3494, 4621, 6221, 7749, 10666, 13460, 16170, 18818, 21415, 23972], //This line corresponds to LIST_OF_PLANES[0], aka "Boeing 737-800"
        [0, 0],
        [0, 0]
    ];
    FUEL_CONSUMPTION_OTHER = [0, 0, 0];

    NUMBER_OF_Y_SEATS = [162, 0, 0]; //The position in this array corresponds to LIST_OF_PLANES. Y_Seats = economy seats
    NUMBER_OF_Y_SEATS_OTHER = 100; //This number is open for discussion

    PAX_LOAD_FACTOR = 75; //This number is open for discussion

    PAX_TO_FREIGHT_FACTOR = 85; //This number is open for discussion

    KM_PER_HOUR = [842, 0, 0]; ////The position in this array corresponds to LIST_OF_PLANES. Enter the cruise speed of the aircraft
    KM_PER_HOUR_OTHER = 0;


    constructor() {
    }

    getListOfPlanesIndex(plane) {
        return this.LIST_OF_PLANES.indexOf(plane);
    }

    getListOfDistanceAsKm(index) {
        return this.LIST_OF_DISTANCE * 1.852;
    }

    getFuelConsumption(flightType, flightTime) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        let closestNum = 0;
        let currentNum;
        let closestIndex;
        for (let i = 0; i < this.LIST_OF_DISTANCE.length; i++) {
            currentNum = flightTime*this.KM_PER_HOUR[a] - this.getListOfDistanceAsKm(i);
            currentNum = Math.abs(currentNum);
            if (currentNum < closestNum || i == 0) {
                closestNum = currentNum;
                closestIndex = i;
            }
        }

        if (a != null) {
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
            currentNum = flightTime*this.KM_PER_HOUR[a] - this.getListOfDistanceAsKm(i);
            currentNum = Math.abs(currentNum);
            if (currentNum < closestNum || i == 0) {
                closestNum = currentNum;
                closestIndex = i;
            }
        }
        return this.FUEL_CONSUMPTION_OTHER[closestIndex];
    }

    getNumberOfYSeats(flightType) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        if (a != null) {
            return this.NUMBER_OF_Y_SEATS[a];
        } else {
            this.getNumberOfYSeatsOther();
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
        if (a != null) {
            return this.KM_PER_HOUR[a];
        } else {
            this.getKMPerHourOther()
        }
    }

    getKMPerHourOther() {
        return this.KM_PER_HOUR_OTHER;
    }


}