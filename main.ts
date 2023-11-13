input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # # # . #
        . . # . #
        # # # # #
        # . # . .
        # . # # #
        `)
})
basic.forever(function () {
	
})
