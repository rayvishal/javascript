// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
function posCom(switches) {
    console.log(Math.pow(2, switches))
}
posCom(3)