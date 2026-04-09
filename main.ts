radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showString("?")
    }
    initial = 1
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    initial = 0
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
    if (inputMode) {
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
    }
})
radio.onReceivedString(function (receivedString) {
    initial = 0
    inputMode = 0
    recievedString = receivedString
    basic.clearScreen()
    basic.showString(receivedString)
    while (!(inputMode) && !(initial)) {
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
let recievedString = ""
let binaryNumber = ""
let inputMode = 0
let initial = 0
radio.setGroup(190)
initial = 1
basic.forever(function () {
    while (initial) {
        basic.showString("?")
        basic.showString("_")
    }
})
