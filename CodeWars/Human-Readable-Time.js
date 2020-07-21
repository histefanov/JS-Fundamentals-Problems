function humanReadable(seconds) {
    let hh = Math.floor(seconds / 3600);
    seconds -= hh * 3600;
    let mm = Math.floor(seconds / 60);
    seconds -= mm * 60;
    let ss = seconds;

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    console.log(`${hh}:${mm}:${ss}`);
}

humanReadable(60)