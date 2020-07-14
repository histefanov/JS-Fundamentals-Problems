function flightSchedule(input) {
    class Flight {
        constructor(flightNumber, destination) {
            this.flightNumber = flightNumber;
            this.destination = destination;
        }

        status = 'Ready to fly';

        printInfo() {
            console.log(`{ Destination: '${this.destination}', Status: '${this.status}' }`);
        }
    }

    let flightsInfo = input[0];
    let updates = input[1];
    let statusCheck = input[2][0];
    let flightsList = [];

    flightsInfo.forEach(el => {
        let currentFlight = el.split(' ');
        let flightNr = currentFlight[0];
        let flightDest = currentFlight[1];

        flightsList.push(new Flight(flightNr, flightDest));
    })

    updates.forEach(el => {
        let flightNr = el.split(' ')[0];

        flightsList.forEach(flight => {
            if (flight['flightNumber'] == flightNr) {
                flight['status'] = 'Cancelled';
            }
        })
    })

    flightsList.forEach(flight => {
        if (flight['status'] == statusCheck) flight.printInfo();
    })

}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])