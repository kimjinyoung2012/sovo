let 각도 = 0
input.onButtonPressed(Button.A, function () {
    각도 = 각도 + 1
    if (각도 > 180) {
        각도 = 180
    }
    pins.servoWritePin(AnalogPin.P0, 각도)
})
input.onButtonPressed(Button.B, function () {
    각도 = 각도 - 1
    if (각도 < 0) {
        각도 = 0
    }
    pins.servoWritePin(AnalogPin.P0, 각도)
})
