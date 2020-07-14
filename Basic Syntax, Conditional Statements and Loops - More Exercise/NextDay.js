function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    let yyyy = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    let today = yyyy + "-" + (m + 1) + "-" + d;
    console.log(today);
}
nextDay(2016, 9, 30)
