function gradeInWords(grade) {
    if (grade >= 2 && grade < 3) {
        return "Fail";
    } else if (grade < 3.5) {
        return "Poor";
    } else if (grade < 4.5) {
        return "Good";
    } else if (grade < 5.5) {
        return "Very good";
    } else {
        return "Excellent";
    }
}