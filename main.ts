let p = 0
basic.showString("Hello!")
OLED.init(128, 64)
OLED.clear()
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    p = pins.analogReadPin(AnalogPin.P1)
    if (p > 3) {
        music.play(music.stringPlayable("B D B D B D B D ", 120), music.PlaybackMode.UntilDone)
        OLED.writeString("Detected!")
    }
    OLED.clear()
})
