class Database {

    LIST_OF_PLANES = [0, 0, 0];

    LIST_OF_TIMES = [0, 0, 0];

    FUEL_CONSUMPTION = [
        [0, 0],
        [0, 0],
        [0, 0]
    ];
    FUEL_CONSUMPTION_OTHER = [0, 0, 0];

    NUMBER_OF_Y_SEATS = [0, 0, 0];
    NUMBER_OF_Y_SEATS_OTHER = 0;

    PAX_LOAD_FACTOR = 0;

    PAX_TO_FREIGHT_FACTOR = 0;

    KM_PER_HOUR = [0, 0, 0];
    KM_PER_HOUR_OTHER = 0;


    constructor() {
    }

    getListOfPlanesIndex(plane) {
        return this.LIST_OF_PLANES.indexOf(plane);
    }

    getFuelConsumption(flightType, flightTime) {
        let a = this.LIST_OF_PLANES.indexOf(flightType);
        let closestNum = 0;
        let currentNum;
        let closestIndex;
        for (let i = 0; i < this.LIST_OF_TIMES.length; i++) {
            currentNum = flightTime - this.LIST_OF_TIMES[i];
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
        for (let i = 0; i < this.LIST_OF_TIMES.length; i++) {
            currentNum = flightTime - this.LIST_OF_TIMES[i];
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