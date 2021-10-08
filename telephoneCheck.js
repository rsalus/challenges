/* return true if passed string is a valid US phone num */
/* submitted to freecodecamp.org's course on javascript */

function telephoneCheck(str) {
    /*  ACCEPTED FORMATS
        555-555-5555
        (555)555-5555
        (555) 555-5555
        555 555 5555
        5555555555
        1 555 555 5555
    */
    let testRegex = /^(1\s?)?(\(\d{3}\)\ ?|\d{3}(\-?|\ ?))\d{3}[- ]?\d{4}$/g;
    return testRegex.test(str);
}

console.log(
    telephoneCheck("1 (555) 555-5555")
);