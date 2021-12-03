basic.forever(function () {
    radio.setGroup(1)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString(".")
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("-")
        images.createImage(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
