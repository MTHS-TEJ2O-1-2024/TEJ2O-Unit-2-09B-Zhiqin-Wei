/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daly
 * Created on: oct 2024
 * This program ...
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 1)
    basic.clearScreen()

    //if randomNumber == 0
    if (randomNumber == 0) {
    basic.showString("N")
    }

    //if randomNumber == 1
    if (randomNumber == 1) {
        basic.showString("Y")
    }

    // pause and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
