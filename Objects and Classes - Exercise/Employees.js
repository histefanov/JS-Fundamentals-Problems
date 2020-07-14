function employees(input) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }

        printInfo() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    let employeesList = [];

    input.forEach(x => {
        employeesList.push(new Employee(x, x.length));
    })

    employeesList.forEach(x => x.printInfo()); 
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])