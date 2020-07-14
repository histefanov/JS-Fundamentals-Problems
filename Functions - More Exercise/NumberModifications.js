function numModification(number) {
    modifier = number => parseInt(number.toString() + '9');
    
    avgTester = number => {
        let sum = 0;
        for (const digit of number.toString()) {
            sum += Number(digit);
        }

        let avgValue = sum / number.toString().length;
        return avgValue > 5;
    }

    if (avgTester(number)) {
        console.log(number);
    } else {
        return numModification(modifier(number));
    }
}
numModification(101)