let Copper_Switch = 0
basic.forever(function () {
    Copper_Switch = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(Copper_Switch)
    if (Copper_Switch == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
