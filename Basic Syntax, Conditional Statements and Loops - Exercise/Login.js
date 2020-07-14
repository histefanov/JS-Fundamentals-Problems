function login(array) {
    username = array[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    for (let i = 1; i <= 4; i++) {
        let currentAttempt = array[i];
        if (currentAttempt == password) {
            console.log(`User ${username} logged in.`)
            return;
        } else {
            if (i != 4) {
            console.log("Incorrect password. Try again.");
            } else {
                console.log(`User ${username} blocked!`);
            }
        }
    }
}