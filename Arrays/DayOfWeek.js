function dayOfWeek(number) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (0 < number && number < 8) {
        console.log(week[number - 1]);
    } else {
        console.log('Invalid day!')
    }
}
dayOfWeek(3)