function theatrePromotion(dayType, age) {
    let ticketPrice = 0;
    switch (dayType) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (18 < age && age <= 64) {
                ticketPrice = 18;
            } else if (64 < age && age <= 122) {
                ticketPrice = 12;
            } else {
                console.log('Error!')
                return;
            } break;
        case 'Weekend':
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            } else if (18 < age && age <= 64) {
                ticketPrice = 20;
            } else if (64 < age && age <= 122) {
                ticketPrice = 15;
            } else {
                console.log('Error!')
                return;
            } break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            } else if (18 < age && age <= 64) {
                ticketPrice = 12;
            } else if (64 < age && age <= 122) {
                ticketPrice = 10;
            } else {
                console.log('Error!')
                return;
            } break;
    }
    console.log(`${ticketPrice}$`);
}