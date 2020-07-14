function court(input) {
    let questions = Number(input.pop());
    const totalPerHour = input.map(Number).reduce((a, b) => a + b);
    let hoursNeeded = 0;
    
    while (questions > 0) {
        hoursNeeded++;
        
        if (hoursNeeded % 4 == 0) {
            hoursNeeded++;
        }
        
        questions -= totalPerHour;
    }
    
    console.log(`Time needed: ${hoursNeeded}h.`);
}

court(['3', '2', '5', '40'])