function englishLastDigit(num) {
    let lastDigit = num % 10;
    let arrayOfNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    console.log(arrayOfNumbers[lastDigit]);
}
englishLastDigit(494)