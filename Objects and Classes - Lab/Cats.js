function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = arr.map(x => {
        let currentCatInfo = x.split(' ');
        return new Cat(currentCatInfo[0], currentCatInfo[1])
    });

    cats.forEach(x => {
        x.meow();
    })
}

solve(['Mellow 2', 'Tom 5', 'Navcho 6'])