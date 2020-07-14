function reverse(input) {
    //     let reversedString = "";
    //     for (let i = input.length - 1; i >= 0; i--) {
    //         reversedString += input[i];
    //     }
    //     console.log(reversedString);
    // }
    let reversedString = input.split("").reverse().join("");
    console.log(reversedString);
}
reverse("aSsHoLe")