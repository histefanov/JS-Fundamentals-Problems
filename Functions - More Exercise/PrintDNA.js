function printDNA(length) {
    let arr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let linkCounter = 1;
    let charCounter = 0;

    for (let i = 0; i < length; i++) {
        var char1 = arr[charCounter];
        charCounter++;
        
        var char2 = arr[charCounter];
        charCounter++;

        if (charCounter == 10) {
            charCounter = 0;
        }

        switch (linkCounter) {
            case 1:
                console.log(firstLink());
                break;
            case 2:
                console.log(secondLink());
                break;
            case 3:
                console.log(thirdLink());
                break;
            case 4:
                console.log(fourthLink());
                break;
        }

        if (linkCounter % 4 == 0) {
            linkCounter = 1;
        } else {
            linkCounter++;
        }
    }
    
    function firstLink() {
        return `**${char1}${char2}**`;
    }

    function secondLink() {
        return `*${char1}--${char2}*`;
    }

    function thirdLink() {
        return `${char1}----${char2}`;
    }

    function fourthLink() {
        return `*${char1}--${char2}*`;
    }
}
printDNA(10);