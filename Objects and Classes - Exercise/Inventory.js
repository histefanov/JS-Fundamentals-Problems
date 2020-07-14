function inventoryManager(input) {
    class Hero {
        constructor(heroName, heroLevel, items) {
            this.heroName = heroName;
            this.heroLevel = heroLevel;
            this.items = items.split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ');
        }

        printInfo() {
            console.log(`Hero: ${this.heroName}\nlevel => ${this.heroLevel}\nitems => ${this.items}`);
        }
    }

    let heroData = input.slice().sort((a, b) => {
        if (Number(a.split(' / ')[1]) > Number(b.split(' / ')[1])) {
            return 1;
        } else if (Number(a.split(' / ')[1]) < Number(b.split(' / ')[1])) {
            return -1;
        } else {
            return 0;
        }
    })
    
    let heroRegistry = [];

    while (heroData.length > 0) {
        let currentHero = heroData.shift().split(' / ');
        heroRegistry.push(new Hero(currentHero[0], currentHero[1], currentHero[2]));
    }

    heroRegistry.forEach(x => x.printInfo());
}
inventoryManager([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])