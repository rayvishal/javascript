// Assuming that we have some email addresses in the "username@companyname.com" format, please write program to print the company name of a given email address. Both user names and company names are composed of letters only.

// Example: If the following email address is given as input to the program:

// john@google.com
// Then, the output of the program should be:

// google
function sort(mail) {
    const text = mail.split('')
    console.log(text)
    const name = []
    text.map((e, index) => {
        if (e == "@") {
            for (let i = index + 1; i > index; i++) {
                if (text[i] == '.') {
                    break;
                } else {
                    name.push(text[i])
                }
            }
        }
    })
    console.log(name.join(''))
}
sort("john@google.com")