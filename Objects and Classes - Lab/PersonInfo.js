function solve(firstName, lastName, age) {
    class Person {
        constructor() {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let obj = new Person (firstName, lastName, age);
    
    for (const parameter in obj) {
        console.log(`${parameter}: ${obj[parameter]}`)
    }
}
solve("Peter", 
"Pan",
"20")