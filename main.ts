function P_Shot () {
    i11 = position_x + 5 * position_y
    if (E_Map[i11] < 3) {
        E_Map[i11] = 3
        if (Hood_X1 == position_x && Hood_Y1 == position_y || (Hood_X2 == position_x && Hood_Y2 == position_y || Hood_X3 == position_x && Hood_Y3 == position_y)) {
            Hood_life = Hood_life - 1
            E_Map[i11] = 4
            i14 = 1
        }
        if (Prince_of_Wales_X1 == position_x && Prince_of_Wales_Y1 == position_y || Prince_of_Wales_X2 == position_x && Prince_of_Wales_Y2 == position_y) {
            Prince_of_Wales_life = Prince_of_Wales_life - 1
            E_Map[i11] = 4
            i14 = 1
        }
        if (Norfolk_X == position_x && Norfolk_Y == position_y) {
            Norfolck_life = Norfolck_life - 1
            E_Map[i11] = 4
            i14 = 1
        }
        Step = 1
        if (i14 == 1) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . . # # .
                # # # # #
                . # # # #
                `)
            if (Hood_life == 0) {
                Hood_life = Hood_life - 1
                E_Ships = E_Ships - 1
                I7_Ship_pos = Hood_pos
                I6 = Hood_i6
                roll = Hood_roll
                Field = E_Map
                BB_Zone()
                Swap()
                E_Map = Field
                Sinck_Full_Hood_expirience()
            }
            if (Prince_of_Wales_life == 0) {
                Prince_of_Wales_life = Prince_of_Wales_life - 1
                E_Ships = E_Ships - 1
                I7_Ship_pos = PoW_pos
                I6 = Pow_i6
                roll = PoW_roll
                Field = E_Map
                CA_Zone()
                Swap()
                E_Map = Field
                Sinck_Full_Hood_expirience()
            }
            if (Norfolck_life == 0) {
                Norfolck_life = Norfolck_life - 1
                E_Ships = E_Ships - 1
                I7_Ship_pos = Notfolck_pos
                roll = Norfolck_roll
                I6 = Norfolck_i6
                Field = E_Map
                DD_Zone()
                Swap()
                E_Map = Field
                Sinck_Full_Hood_expirience()
            }
        } else {
            Miss_USS_William_D_PoterDD579()
        }
        i14 = 0
        basic.pause(500)
        basic.clearScreen()
    }
    I7_Ship_pos = 0
    roll = 0
    I6 = 0
    Field = []
    return 0
}
// 0 - down
// 1 - righta
function rolls () {
    if (roll == 0) {
        roll = 1
        led.toggle(2, 1)
        led.toggle(2, 2)
        led.toggle(2, 3)
        basic.pause(200)
        led.toggle(2, 1)
        led.toggle(2, 2)
        led.toggle(2, 3)
    } else {
        roll = 0
        led.toggle(1, 2)
        led.toggle(2, 2)
        led.toggle(3, 2)
        basic.pause(200)
        led.toggle(1, 2)
        led.toggle(2, 2)
        led.toggle(3, 2)
    }
}
function BB_Zone () {
    if (roll == 1) {
        if (I7_Ship_pos > 2) {
            Field[I6 - 16] = 2
        }
        if (I7_Ship_pos > 2) {
            Field[I6 - 11] = 2
        }
        if (I7_Ship_pos > 2) {
            Field[I6 - 6] = 2
        }
        if (I7_Ship_pos > 2) {
            Field[I6 - 1] = 2
        }
        if (I7_Ship_pos > 2) {
            Field[I6 + 4] = 2
        }
        if (I7_Ship_pos < 11) {
            Field[I6 - 9] = 2
        }
        if (I7_Ship_pos < 11) {
            Field[I6 - 14] = 2
        }
        if (I7_Ship_pos < 11) {
            Field[I6 - 4] = 2
        }
        if (I7_Ship_pos < 11) {
            Field[I6 + 1] = 2
        }
        if (I7_Ship_pos < 11) {
            Field[I6 + 6] = 2
        }
        Field[I6 - 15] = 2
        Field[I6 + 5] = 2
        if (Chapter <= 2) {
            Field[I6] = 1
            Field[I6 - 5] = 1
            Field[I6 - 10] = 1
        }
    }
    if (roll == 0) {
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 3 || I7_Ship_pos == 6) || (I7_Ship_pos == 9 || I7_Ship_pos == 12))) {
            Field[I6 - 8] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 3 || I7_Ship_pos == 6) || (I7_Ship_pos == 9 || I7_Ship_pos == 12))) {
            Field[I6 - 3] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 3 || I7_Ship_pos == 6) || (I7_Ship_pos == 9 || I7_Ship_pos == 12))) {
            Field[I6 + 2] = 2
        }
        if (!(I7_Ship_pos == 2 || (I7_Ship_pos == 5 || I7_Ship_pos == 8) || (I7_Ship_pos == 11 || I7_Ship_pos == 14))) {
            Field[I6 - 4] = 2
        }
        if (!(I7_Ship_pos == 2 || (I7_Ship_pos == 5 || I7_Ship_pos == 8) || (I7_Ship_pos == 11 || I7_Ship_pos == 14))) {
            Field[I6 + 1] = 2
        }
        if (!(I7_Ship_pos == 2 || (I7_Ship_pos == 5 || I7_Ship_pos == 8) || (I7_Ship_pos == 11 || I7_Ship_pos == 14))) {
            Field[I6 + 6] = 2
        }
        Field[I6 - 7] = 2
        Field[I6 - 6] = 2
        Field[I6 - 5] = 2
        Field[I6 + 3] = 2
        Field[I6 + 4] = 2
        Field[I6 + 5] = 2
        if (Chapter <= 2) {
            Field[I6] = 1
            Field[I6 - 1] = 1
            Field[I6 - 2] = 1
        }
    }
}
function Ship_position () {
    i9 = 30 - 5 * number_of_ships
    if (I7_Ship_pos >= i9) {
        I7_Ship_pos = 0
    }
    if (Free_B == 0) {
        if (input.buttonIsPressed(Button.B)) {
            rolls()
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        Free_B = 1
        if (number_of_ships == 4) {
            i5 = 1
        }
        if (number_of_ships == 3) {
            i5 = 2
        }
        if (number_of_ships == 2) {
            i5 = 3
        }
        if (number_of_ships == 1) {
            i5 = 4
        }
        if (roll == 0) {
            position_x = position_x + 1
            I7_Ship_pos = I7_Ship_pos + 1
            if (position_x > i5) {
                position_x = 0
                position_y = position_y + 1
                if (position_y > 4) {
                    position_y = 0
                }
            }
            show()
        }
        if (roll == 1) {
            position_y = position_y + 1
            I7_Ship_pos = I7_Ship_pos + 1
            if (position_y > i5) {
                position_y = 0
                position_x = position_x + 1
                if (position_x > 4) {
                    position_x = 0
                }
            }
            show()
        }
        basic.pause(100)
    }
    if (Free_B == 1) {
        if (input.buttonIsPressed(Button.B)) {
            if (number_of_ships == 1) {
                DD()
                basic.pause(500)
            }
            if (number_of_ships == 2) {
                CA()
                basic.pause(500)
            }
            if (number_of_ships == 3) {
                BB()
                basic.pause(500)
            }
            I7_Ship_pos = 0
            I6 = 0
        }
    }
    return 0
}
function Please_show_my_ships () {
    for (let i15 = 0; i15 <= 24; i15++) {
        Shell_Y = Math.floor(i15 / 5)
        Shell_X = i15 % 5
        if (P_Map[i15] == 1) {
            led.plotBrightness(Shell_X, Shell_Y, 255)
        }
        if (Chapter == 1) {
            if (P_Map[i15] == 2) {
                led.plotBrightness(Shell_X, Shell_Y, 128)
            }
        }
        if (P_Map[i15] == 3) {
            led.plotBrightness(Shell_X, Shell_Y, 64)
        }
        if (P_Map[i15] == 4) {
            led.plotBrightness(Shell_X, Shell_Y, 255)
            basic.pause(10)
            led.plotBrightness(Shell_X, Shell_Y, 64)
        }
    }
}
function Swap () {
    for (let i15 = 0; i15 <= 24; i15++) {
        if (Field[i15] == 1) {
        	
        }
        if (Field[i15] == 2) {
            Field[i15] = 3
        }
        if (Field[i15] == 3) {
        	
        }
        if (Field[i15] == 4) {
        	
        }
    }
}
function Chapter_3 () {
    if (Step == 0) {
        if (input.buttonIsPressed(Button.A)) {
            if (i4 == 0) {
                i4 = 1
            } else {
                i4 = 0
            }
            i2 = 0
            basic.clearScreen()
            basic.pause(100)
        }
        if (i4 == 0) {
            Please_show_my_ships()
        }
        if (i4 == 1) {
            Step_P()
            i13 = 0
        }
    }
    if (Step == 1) {
        Step_E()
        i4 = 0
    }
    if (Step == 2) {
        position_y = Save_pos_Y
        position_x = Save_pos_X
        Step = 0
    }
}
function Step_P () {
    Draw_E_Map()
    if (i2 == 0) {
        i2 = 1
        led.toggle(position_x, position_y)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (i12 == 0) {
            i12 = 1
        } else {
            i12 = 0
        }
        led.toggle(0, 0)
        led.toggle(4, 0)
        basic.pause(1000)
        led.toggle(4, 0)
        led.toggle(0, 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.toggle(position_x, position_y)
        if (i12 == 0) {
            position_x = position_x + 1
        } else {
            position_x = position_x - 1
        }
        if (position_x > 4) {
            position_x = 0
            if (i12 == 0) {
                position_y = position_y + 1
                if (position_y > 4) {
                    position_y = 0
                }
            }
        }
        if (position_x < 0) {
            position_x = 4
            if (i12 == 1) {
                position_y = position_y - 1
                if (position_y < 0) {
                    position_y = 4
                }
            }
        }
        Save_pos_Y = position_y
        Save_pos_X = position_x
        basic.pause(100)
        led.toggle(position_x, position_y)
    }
    if (input.isGesture(Gesture.Shake)) {
        P_Shot()
        basic.pause(200)
    }
}
function Ship () {
    I6 = position_x + 5 * position_y
    if (roll == 1) {
        if (number_of_ships >= 3 && Field[I6 + 10] != 0) {
            Ship_2()
            return 0
        } else {
            if (number_of_ships >= 2 && Field[I6 + 5] != 0) {
                Ship_2()
                return 0
            } else {
                if (Field[I6] != 0) {
                    Ship_2()
                    return 0
                } else {
                    for (let index = 0; index < number_of_ships; index++) {
                        I6 = position_x + 5 * position_y
                        i4 = i4 + 1
                        Ship_X1 = position_x
                        Ship_X2 = position_x
                        Ship_X3 = position_x
                        if (i4 == 1) {
                            Ship_Y1 = position_y
                        }
                        if (i4 == 2) {
                            Ship_Y2 = position_y
                        }
                        if (i4 == 3) {
                            Ship_Y3 = position_y
                        }
                        if (Chapter == 1) {
                            led.plot(position_x, position_y)
                        }
                        position_y = position_y + 1
                    }
                }
            }
        }
    }
    if (roll == 0) {
        if (number_of_ships >= 3 && Field[I6 + 2] != 0) {
            Ship_2()
            return 0
        } else {
            if (number_of_ships >= 2 && Field[I6 + 1] != 0) {
                Ship_2()
                return 0
            } else {
                if (Field[I6] != 0) {
                    Ship_2()
                    return 0
                } else {
                    for (let index = 0; index < number_of_ships; index++) {
                        I6 = position_x + 5 * position_y
                        i4 = i4 + 1
                        Ship_Y1 = position_y
                        Ship_Y2 = position_y
                        Ship_Y3 = position_y
                        if (i4 == 1) {
                            Ship_X1 = position_x
                        }
                        if (i4 == 2) {
                            Ship_X2 = position_x
                        }
                        if (i4 == 3) {
                            Ship_X3 = position_x
                        }
                        if (Chapter == 1) {
                            led.plot(position_x, position_y)
                        }
                        position_x = position_x + 1
                    }
                }
            }
        }
    }
    if (number_of_ships == 3) {
        BB_Zone()
    }
    if (number_of_ships == 2) {
        CA_Zone()
    }
    if (number_of_ships == 1) {
        DD_Zone()
    }
    number_of_ships = number_of_ships - 1
    Free_B = 0
    position_x = 0
    position_y = 0
    i4 = 0
    return 0
}
function BB () {
    if (Chapter == 1) {
        Field = P_Field
        Ship()
        Bismarck_X1 = Ship_X1
        Bismarck_X2 = Ship_X2
        Bismarck_X3 = Ship_X3
        Bismarck_Y1 = Ship_Y1
        Bismarck_Y2 = Ship_Y2
        Bismarck_Y3 = Ship_Y3
        P_Field = Field
        Bismarck_pos = I7_Ship_pos
        Bismarck_i6 = I6
        Bismarck_roll = roll
    }
    if (Chapter == 2) {
        Field = E_Field
        Ship()
        Hood_X1 = Ship_X1
        Hood_X2 = Ship_X2
        Hood_X3 = Ship_X3
        Hood_Y1 = Ship_Y1
        Hood_Y2 = Ship_Y2
        Hood_Y3 = Ship_Y3
        E_Field = Field
        Hood_pos = I7_Ship_pos
        Hood_i6 = I6
        Hood_roll = roll
    }
}
function AI_Fleet () {
    i9 = 30 - 5 * number_of_ships
    if (I7_Ship_pos >= i9) {
        I7_Ship_pos = 0
    }
    roll = randint(0, 1)
    if (number_of_ships == 3) {
        i8 = 15
    }
    if (number_of_ships == 2) {
        i8 = 20
    }
    if (number_of_ships == 1) {
        i8 = 25
    }
    for (let index = 0; index < randint(1, i8); index++) {
        if (number_of_ships == 4) {
            i5 = 1
        }
        if (number_of_ships == 3) {
            i5 = 2
        }
        if (number_of_ships == 2) {
            i5 = 3
        }
        if (number_of_ships == 1) {
            i5 = 4
        }
        if (roll == 0) {
            position_x = position_x + 1
            I7_Ship_pos = I7_Ship_pos + 1
            if (position_x > i5) {
                position_x = 0
                position_y = position_y + 1
                if (position_y > 4) {
                    position_y = 0
                }
            }
        }
        if (roll == 1) {
            position_y = position_y + 1
            I7_Ship_pos = I7_Ship_pos + 1
            if (position_y > i5) {
                position_y = 0
                position_x = position_x + 1
                if (position_x > 4) {
                    position_x = 0
                }
            }
        }
    }
    if (number_of_ships == 1) {
        DD()
    }
    if (number_of_ships == 2) {
        CA()
    }
    if (number_of_ships == 3) {
        BB()
    }
    I6 = 0
    I7_Ship_pos = 0
}
function E_Shot () {
    i11 = position_x + 5 * position_y
    if (P_Map[i11] < 3) {
        P_Map[i11] = 3
        if (Bismarck_X1 == position_x && Bismarck_Y1 == position_y || (Bismarck_X2 == position_x && Bismarck_Y2 == position_y || Bismarck_X3 == position_x && Bismarck_Y3 == position_y)) {
            Bismarck_life = Bismarck_life - 1
            P_Map[i11] = 4
            i14 = 1
        }
        if (Prinz_Eugen_X1 == position_x && Prinz_Eugen_Y1 == position_y || Prinz_Eugen_X2 == position_x && Prinz_Eugen_Y2 == position_y) {
            Prinz_Eugen_life = Prinz_Eugen_life - 1
            P_Map[i11] = 4
            i14 = 1
        }
        if (Z23_X == position_x && Z23_Y == position_y) {
            Z23_life = Z23_life - 1
            P_Map[i11] = 4
            i14 = 1
        }
        basic.showString("" + (position_x + 1))
        basic.pause(500)
        basic.showString("" + (position_y + 1))
        basic.pause(500)
        if (i14 == 1) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . . # # .
                # # # # #
                . # # # #
                `)
            if (Bismarck_life == 0) {
                Bismarck_life = Bismarck_life - 1
                P_Ships = P_Ships - 1
                I7_Ship_pos = Bismarck_pos
                I6 = Bismarck_i6
                roll = Bismarck_roll
                Field = P_Map
                BB_Zone()
                Swap()
                P_Map = Field
                Sinck_Full_Hood_expirience()
            }
            if (Prinz_Eugen_life == 0) {
                Prinz_Eugen_life = Prinz_Eugen_life - 1
                P_Ships = P_Ships - 1
                I7_Ship_pos = Prinz_Eugen_pos
                I6 = Prinz_Eugen_i6
                roll = Prinz_Eugen_roll
                Field = P_Map
                CA_Zone()
                Swap()
                P_Map = Field
                Sinck_Full_Hood_expirience()
            }
            if (Z23_life == 0) {
                Z23_life = Z23_life - 1
                P_Ships = P_Ships - 1
                I7_Ship_pos = Z23_pos
                roll = Z23_roll
                I6 = Z23_i6
                Field = P_Map
                DD_Zone()
                Swap()
                P_Map = Field
                Sinck_Full_Hood_expirience()
            }
        } else {
            Miss_USS_William_D_PoterDD579()
        }
        i14 = 0
        basic.pause(500)
        position_x = 2
        position_y = 2
        Step = 2
        basic.clearScreen()
    }
    I7_Ship_pos = 0
    roll = 0
    I6 = 0
    Field = []
    return 0
}
function Miss_USS_William_D_PoterDD579 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
}
function DD () {
    if (Chapter == 1) {
        Field = P_Field
        Ship()
        Z23_X = Ship_X1
        Z23_Y = Ship_Y1
        P_Field = Field
        Z23_pos = I7_Ship_pos
        Z23_i6 = I6
        Z23_roll = roll
    }
    if (Chapter == 2) {
        Field = E_Field
        Ship()
        Norfolk_X = Ship_X1
        Norfolk_Y = Ship_Y1
        E_Field = Field
        Notfolck_pos = I7_Ship_pos
        Norfolck_i6 = I6
        Norfolck_roll = roll
    }
}
function Step_E () {
    position_x = randint(0, 4)
    position_y = randint(0, 4)
    E_Shot()
}
function DD_Zone () {
    if (Chapter <= 2) {
        Field[I6] = 1
    }
    Field[I6 + 5] = 2
    Field[I6 - 5] = 2
    if (roll == 1) {
        if (I7_Ship_pos > 4) {
            Field[I6 - 6] = 2
        }
        if (I7_Ship_pos > 4) {
            Field[I6 - 1] = 2
        }
        if (I7_Ship_pos > 4) {
            Field[I6 + 4] = 2
        }
        if (I7_Ship_pos < 20) {
            Field[I6 - 4] = 2
        }
        if (I7_Ship_pos < 20) {
            Field[I6 + 1] = 2
        }
        if (I7_Ship_pos < 20) {
            Field[I6 + 6] = 2
        }
    }
    if (roll == 0) {
        if (!(I7_Ship_pos == 4 || (I7_Ship_pos == 9 || I7_Ship_pos == 14) || (I7_Ship_pos == 19 || I7_Ship_pos == 24))) {
            Field[I6 - 4] = 2
        }
        if (!(I7_Ship_pos == 4 || (I7_Ship_pos == 9 || I7_Ship_pos == 14) || (I7_Ship_pos == 19 || I7_Ship_pos == 24))) {
            Field[I6 + 1] = 2
        }
        if (!(I7_Ship_pos == 4 || (I7_Ship_pos == 9 || I7_Ship_pos == 14) || (I7_Ship_pos == 19 || I7_Ship_pos == 24))) {
            Field[I6 + 6] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 5 || I7_Ship_pos == 10) || (I7_Ship_pos == 15 || I7_Ship_pos == 20))) {
            Field[I6 + 4] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 5 || I7_Ship_pos == 10) || (I7_Ship_pos == 15 || I7_Ship_pos == 20))) {
            Field[I6 - 1] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 5 || I7_Ship_pos == 10) || (I7_Ship_pos == 15 || I7_Ship_pos == 20))) {
            Field[I6 - 6] = 2
        }
    }
}
function Sinck_Full_Hood_expirience () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        `)
}
function show () {
    i3 = -1
    if (roll == 0) {
        for (let index = 0; index < number_of_ships; index++) {
            i3 = i3 + 1
            led.toggle(position_x + i3, position_y)
        }
        basic.pause(500)
        i3 = -1
        for (let index = 0; index < number_of_ships; index++) {
            i3 = i3 + 1
            led.toggle(position_x + i3, position_y)
        }
    }
    if (roll == 1) {
        for (let index = 0; index < number_of_ships; index++) {
            i3 = i3 + 1
            led.toggle(position_x, position_y + i3)
        }
        basic.pause(500)
        i3 = -1
        for (let index = 0; index < number_of_ships; index++) {
            i3 = i3 + 1
            led.toggle(position_x, position_y + i3)
        }
    }
}
function Draw_E_Map () {
    for (let i15 = 0; i15 <= 24; i15++) {
        Shell_Y = Math.floor(i15 / 5)
        Shell_X = i15 % 5
        if (E_Map[i15] == 1) {
            led.plotBrightness(Shell_X, Shell_Y, 255)
        }
        if (E_Map[i15] == 2) {
            led.plotBrightness(Shell_X, Shell_Y, 128)
        }
        if (E_Map[i15] == 3) {
            led.plotBrightness(Shell_X, Shell_Y, 64)
        }
        if (E_Map[i15] == 4) {
            led.plotBrightness(Shell_X, Shell_Y, 255)
            basic.pause(10)
            led.plotBrightness(Shell_X, Shell_Y, 64)
        }
    }
}
function To_Chapter_2 () {
    basic.clearScreen()
    number_of_ships = 3
    i2 = 0
    roll = 0
    Free_B = 0
    i4 = 0
    I7_Ship_pos = 0
    E_Field = []
    Chapter = 2
    Field = []
    for (let index = 0; index < 25; index++) {
        E_Field.push(0)
    }
    return 0
}
function CA_Zone () {
    if (roll == 1) {
        if (I7_Ship_pos > 3) {
            Field[I6 - 11] = 2
        }
        if (I7_Ship_pos > 3) {
            Field[I6 - 6] = 2
        }
        if (I7_Ship_pos > 3) {
            Field[I6 - 1] = 2
        }
        if (I7_Ship_pos > 3) {
            Field[I6 + 4] = 2
        }
        if (I7_Ship_pos < 15) {
            Field[I6 - 9] = 2
        }
        if (I7_Ship_pos < 15) {
            Field[I6 - 4] = 2
        }
        if (I7_Ship_pos < 15) {
            Field[I6 + 1] = 2
        }
        if (I7_Ship_pos < 15) {
            Field[I6 + 6] = 2
        }
        Field[I6 - 10] = 2
        Field[I6 + 5] = 2
        if (Chapter <= 2) {
            Field[I6] = 1
            Field[I6 - 5] = 1
        }
    }
    if (roll == 0) {
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 4 || I7_Ship_pos == 8) || (I7_Ship_pos == 12 || I7_Ship_pos == 16))) {
            Field[I6 - 7] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 4 || I7_Ship_pos == 8) || (I7_Ship_pos == 12 || I7_Ship_pos == 16))) {
            Field[I6 - 2] = 2
        }
        if (!(I7_Ship_pos == 0 || (I7_Ship_pos == 4 || I7_Ship_pos == 8) || (I7_Ship_pos == 12 || I7_Ship_pos == 16))) {
            Field[I6 + 3] = 2
        }
        if (!(I7_Ship_pos == 3 || (I7_Ship_pos == 7 || I7_Ship_pos == 11) || (I7_Ship_pos == 15 || I7_Ship_pos == 19))) {
            Field[I6 - 4] = 2
        }
        if (!(I7_Ship_pos == 3 || (I7_Ship_pos == 7 || I7_Ship_pos == 11) || (I7_Ship_pos == 15 || I7_Ship_pos == 19))) {
            Field[I6 + 1] = 2
        }
        if (!(I7_Ship_pos == 3 || (I7_Ship_pos == 7 || I7_Ship_pos == 11) || (I7_Ship_pos == 15 || I7_Ship_pos == 19))) {
            Field[I6 + 6] = 2
        }
        Field[I6 - 6] = 2
        Field[I6 - 5] = 2
        Field[I6 + 4] = 2
        Field[I6 + 5] = 2
        if (Chapter <= 2) {
            Field[I6] = 1
            Field[I6 - 1] = 1
        }
    }
}
function CA () {
    if (Chapter == 1) {
        Field = P_Field
        Ship()
        Prinz_Eugen_X1 = Ship_X1
        Prinz_Eugen_X2 = Ship_X2
        Prinz_Eugen_Y1 = Ship_Y1
        Prinz_Eugen_Y2 = Ship_Y2
        P_Field = Field
        Prinz_Eugen_pos = I7_Ship_pos
        Prinz_Eugen_i6 = I6
        Prinz_Eugen_roll = roll
    }
    if (Chapter == 2) {
        Field = E_Field
        Ship()
        Prince_of_Wales_X1 = Ship_X1
        Prince_of_Wales_X2 = Ship_X2
        Prince_of_Wales_Y1 = Ship_Y1
        Prince_of_Wales_Y2 = Ship_Y2
        E_Field = Field
        PoW_pos = I7_Ship_pos
        Pow_i6 = I6
        PoW_roll = roll
    }
}
function Ship_2 () {
    Free_B = 0
    position_x = 0
    position_y = 0
    i4 = 0
    I6 = 0
    I7_Ship_pos = 0
}
function To_Chapter_3 () {
    Step = 0
    position_x = 2
    position_y = 2
    i2 = 0
    roll = 0
    Free_B = 0
    i4 = 0
    I7_Ship_pos = 0
    Chapter = 3
    E_Map = []
    P_Map = P_Field
    for (let i15 = 0; i15 <= 24; i15++) {
        if (P_Map[i15] == 2) {
            P_Map[i15] = 0
        }
    }
    for (let index = 0; index < 25; index++) {
        E_Map.push(0)
    }
    return 0
}
// Chapter 0 - 
//     Жди!
// Chapter 1 - 
//     сперва кнопкой В виберіть поворот корабля (Після нажатия на А функція недоступна(нехватка кнопок))
//     потім кромкой А виберіть позицію
//     Кнопка В щоб поставить корабиль
// Chapter 2 - 
let i3 = 0
let Z23_i6 = 0
let Z23_roll = 0
let Z23_pos = 0
let Prinz_Eugen_roll = 0
let Prinz_Eugen_i6 = 0
let Prinz_Eugen_pos = 0
let Z23_Y = 0
let Z23_X = 0
let Prinz_Eugen_Y2 = 0
let Prinz_Eugen_X2 = 0
let Prinz_Eugen_Y1 = 0
let Prinz_Eugen_X1 = 0
let i8 = 0
let E_Field: number[] = []
let Bismarck_roll = 0
let Bismarck_i6 = 0
let Bismarck_pos = 0
let Bismarck_Y3 = 0
let Bismarck_Y2 = 0
let Bismarck_Y1 = 0
let Bismarck_X3 = 0
let Bismarck_X2 = 0
let Bismarck_X1 = 0
let Ship_Y3 = 0
let Ship_Y2 = 0
let Ship_Y1 = 0
let Ship_X3 = 0
let Ship_X2 = 0
let Ship_X1 = 0
let i12 = 0
let Save_pos_X = 0
let Save_pos_Y = 0
let i13 = 0
let P_Map: number[] = []
let Shell_X = 0
let Shell_Y = 0
let i5 = 0
let i9 = 0
let Norfolck_i6 = 0
let Norfolck_roll = 0
let Notfolck_pos = 0
let PoW_roll = 0
let Pow_i6 = 0
let PoW_pos = 0
let Hood_roll = 0
let Hood_i6 = 0
let I6 = 0
let Hood_pos = 0
let I7_Ship_pos = 0
let Step = 0
let Norfolk_Y = 0
let Norfolk_X = 0
let Prince_of_Wales_Y2 = 0
let Prince_of_Wales_X2 = 0
let Prince_of_Wales_Y1 = 0
let Prince_of_Wales_X1 = 0
let i14 = 0
let Hood_Y3 = 0
let Hood_X3 = 0
let Hood_Y2 = 0
let Hood_X2 = 0
let Hood_Y1 = 0
let Hood_X1 = 0
let E_Map: number[] = []
let position_y = 0
let position_x = 0
let i11 = 0
let Hood_life = 0
let Bismarck_life = 0
let Prince_of_Wales_life = 0
let Prinz_Eugen_life = 0
let Norfolck_life = 0
let Z23_life = 0
let Field: number[] = []
let Chapter = 0
let P_Field: number[] = []
let i4 = 0
let Free_B = 0
let roll = 0
let i2 = 0
let P_Ships = 0
let E_Ships = 0
let number_of_ships = 0
number_of_ships = 3
E_Ships = 3
P_Ships = 3
i2 = 0
roll = 0
Free_B = 0
i4 = 0
P_Field = []
Chapter = 1
Field = []
for (let index = 0; index < 25; index++) {
    P_Field.push(0)
}
Z23_life = 1
Norfolck_life = 1
Prinz_Eugen_life = 2
Prince_of_Wales_life = 2
Bismarck_life = 3
Hood_life = 3
basic.forever(function () {
    if (P_Ships == 0) {
        Chapter = 5
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
    if (E_Ships == 0) {
        Chapter = 5
        basic.showLeds(`
            # # # # #
            . # # # .
            . # # # .
            . . # . .
            . # # # .
            `)
    }
    if (Chapter == 5) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.pause(1000)
            control.reset()
        }
    }
    if (Chapter == 1) {
        // CHAPTER 1 - Where is yor`s ships?
        while (number_of_ships >= 1) {
            Ship_position()
            P_Map = P_Field
            Please_show_my_ships()
        }
        To_Chapter_2()
    }
    if (Chapter == 2) {
        while (number_of_ships >= 1) {
            // CHAPTER 2 - Where enemy Ships?
            AI_Fleet()
        }
        To_Chapter_3()
    }
    if (Chapter == 4) {
        To_Chapter_3()
    }
    if (Chapter == 3) {
        Chapter_3()
    }
})
