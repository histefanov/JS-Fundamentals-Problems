function extractEmails(input) {
    const str = input.shift();
    const regExp = /(^|(?<= ))([a-z0-9]+([_.-]+[a-z0-9]+)*@[a-z]+(-[a-z]+)?(\.[a-z]+(-[a-z]+)?)+)+/g;
    const validEmails = str.match(regExp);

    if (validEmails) {
        validEmails.forEach((x) => console.log(x));
    }
}

extractEmails(['support@github.com Please contact us at: support1@github.com support@com.com.'])