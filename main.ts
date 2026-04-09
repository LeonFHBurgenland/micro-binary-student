radio.onReceivedNumber(function (receivedNumber) {
    inputMode = 0
    recievedNum = receivedNumber
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (inputMode) {
        binaryNumber = "" + binaryNumber + "0"
        basic.clearScreen()
        basic.showString("0")
        basic.showString("_")
    } else {
        inputMode = 1
        basic.clearScreen()
        basic.showString("_")
    }
})
function doSomething () {
    while (false) {
        basic.showString("")
        basic.showString("_")
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.House)
    radio.sendString(binaryNumber)
    inputMode = 0
    binaryNumber = ""
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (inputMode) {
        binaryNumber = "" + binaryNumber + "1"
        basic.clearScreen()
        basic.showString("1")
        basic.showString("_")
    }
})
let binaryNumber = ""
let inputMode = 0
let recievedNum = 0
radio.setGroup(191)
basic.showString("STUDENT WAITING")
while (!(recievedNum)) {
    basic.showString("_")
}
