// Write a program that computes the net amount of a bank account based a transaction log from console input. The transaction log format is shown as following:

// D 100
// W 200
// D means deposit while W means withdrawal.
// Suppose the following input is supplied to the program:

// D 300
// D 300
// W 200
// D 100
// Then, the output should be:

// 500




function bank(a) {
    const tranction = ["W 100", "D 100"]
    const deposit = []
    const withdrawl = []

    tranction.map((e) => {
        const arr = e.split(" ")


        if (arr[0] == "D") {
            deposit.push(+arr[1])
        } else {
            withdrawl.push(+arr[1])
        }

    })
    const totalDeposit = deposit.reduce((a, b) => {
        return a + b
    })
    const totalWithdrawl = withdrawl.reduce((a, b) => {
        return a + b
    })
    console.log(totalDeposit - totalWithdrawl)
}
bank()