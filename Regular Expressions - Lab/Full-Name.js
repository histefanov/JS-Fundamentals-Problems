function matchFullName(input) {
    return (input
    .shift()
    .match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g)
    .join(' '));
}

matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, tTest Testov, Ivan\tIvanov'
])