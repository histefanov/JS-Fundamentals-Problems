function disemvowel(str) {
    let forbiddenChars = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    console.log(str.split("").filter(char => !forbiddenChars.includes(char)).join(""));
}
disemvowel("This website is for losers LOL!")