// Assuming that we have some email addresses in the "username@companyname.com" format, please write program to print the user name of a given email address. Both user names and company names are composed of letters only.

// Example: If the following email address is given as input to the program:

// john@google.com
function sort(mail) {
    const text = mail.split("")

    const name = []
    for (let i = 0; i < text.length; i++) {

        if (text[i] !== "@") {
            name.push(text[i])
        } else {
            break
        }
    }
    console.log(name.join(""))
}
sort("john@google.com")
