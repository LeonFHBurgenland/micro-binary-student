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
function getValue (text: string) {
    if (!(containsColon(text))) {
        return "-1"
    }
    return text.split(";")[1]
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
        radio.sendString("" + ID + ";" + binaryNumber)
        inputMode = 0
        binaryNumber = ""
    }
})
function getID (text: string) {
    if (!(containsColon(text))) {
        return "-1"
    }
    return text.split(";")[0]
}
radio.onReceivedString(function (receivedString) {
    if (getID(receivedString) == "Teacher") {
        initial = 0
        inputMode = 0
        let recievedStringnew = getValue(receivedString)
        basic.clearScreen()
        basic.showString(recievedStringnew)
        while (!(inputMode) && !(initial)) {
            basic.showString(".")
            basic.showString(" ")
        }
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
function containsColon (text: string) {
    return text.includes(";")
}
let recievedString = ""
let binaryNumber = ""
let inputMode = 0
let initial = 0
let ID = 0
ID = Math.floor(Math.random() * 1000)
radio.setGroup(190)
initial = 1
basic.forever(function () {
    while (initial) {
        basic.showString("?")
        basic.showString("_")
    }
})
