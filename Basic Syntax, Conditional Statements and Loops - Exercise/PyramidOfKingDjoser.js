function pyramid(stepWidth, increment) {
    let stepCounter = 1;
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;

    while (stepWidth >= 1) {
        let outerLayer = (stepWidth * 4 - 4) * increment;
        let bulk = ((stepWidth - 2) ** 2) * increment;
        if (stepWidth <= 2) {
            goldRequired += stepWidth ** 2 * increment;
            break;
        }
        stoneRequired += bulk;
        if (stepCounter % 5 != 0) {
            marbleRequired += outerLayer;
        } else {
            lapisLazuliRequired += outerLayer;
        }
        stepWidth -= 2;
        stepCounter++;
    }
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(stepCounter * increment)}`);
}
pyramid(23, 0.5)