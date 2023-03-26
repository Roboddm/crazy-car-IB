input.onButtonPressed(Button.A, function () {
    Run = 1
    while (Run) {
        basic.showIcon(IconNames.Happy)
        left = randint(-100, 100)
        right = randint(-100, 100)
        RingbitCar.freestyle(left, right)
        basic.showIcon(IconNames.Sad)
        music.playMelody("C D C E C D C E ", 400)
    }
})
input.onButtonPressed(Button.B, function () {
    Run = 0
    right = 0
    left = 0
    RingbitCar.freestyle(left, right)
    RingbitCar.brake()
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
})
let right = 0
let left = 0
let Run = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
