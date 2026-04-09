radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showString("?")
    }
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
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString(binaryNumber)
    inputMode = 0
    binaryNumber = ""
})
radio.onReceivedString(function (receivedString) {
    inputMode = 0
    recievedNum = receivedString
    basic.showString(receivedString)
    while (!(inputMode)) {
        basic.showString(".")
        basic.showString(" ")
    }
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
let recievedNum = ""
serial.writeLine("READY")
radio.setGroup(191)
while (!(recievedNum)) {
    basic.showString("?")
    basic.showString("_")
}
