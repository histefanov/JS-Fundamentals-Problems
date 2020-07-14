function sequence(array) {
    let currentCounter = 0;
    let maxCounter = 0;
    let currentSequence = '';
    let maxSequence = '';
    for (let i = 0; i < array.length; i++) {
        currentSequence += array[i] + ' ';
        currentCounter++;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] == array[i]) {
                currentSequence += array[j] + ' ';
                currentCounter++;
                i++;
            } else {
                break;
            }
        }
        if (currentCounter > maxCounter) {
            maxCounter = currentCounter;
            maxSequence = currentSequence;
        }
        currentCounter = 0;
        currentSequence = '';
    }
    console.log(maxSequence);
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);