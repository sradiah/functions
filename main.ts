/**
 */
function led_blink (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
    }
    basic.clearScreen()
}
basic.forever(function () {
    if (input.temperature() > 40) {
        led_blink(5)
    } else {
        led_blink(1)
    }
    basic.pause(10000)
})
