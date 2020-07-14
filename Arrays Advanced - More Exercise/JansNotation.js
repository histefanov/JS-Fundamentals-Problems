function postfixNotation(input) {
    let commands = input.slice();
    let numbers = [];

    for (let i = 0; i < commands.length; i++) {
        let currentElement = commands[i];

        if (typeof currentElement == 'number') {
            numbers.push(currentElement);
        } else if (numbers.length >= 2) {
            let num2 = numbers.pop();
            let num1 = numbers.pop();

            switch (currentElement) {
                case '+':
                    numbers.push(num1 + num2);
                    break;
                case '-':
                    numbers.push(num1 - num2);
                    break;
                case '*':
                    numbers.push(num1 * num2);
                    break;
                case '/':
                    numbers.push(num1 / num2);
                    break;
            }            
        } else {
            console.log("Error: not enough operands!");
            return;
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!")
    } else {
        console.log(numbers[0]);
    }
}
postfixNotation([15,
    '/'])