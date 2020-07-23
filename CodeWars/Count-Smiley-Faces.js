function countSmileys(arr) {
    const smileyRegex = /(:|;)(-|~)?(\)|D)/
    let smileyCounter = 0;
    arr.forEach((x) => {
        if (x.match(smileyRegex)) {
            smileyCounter++;
        }
    })
    console.log(smileyCounter)
}

countSmileys([':)', ';(', ';}', ':-D'])