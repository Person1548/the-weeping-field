namespace SpriteKind {
    export const Sprite = SpriteKind.create()
    export const Map = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fight_Active == 1) {
        Shield.setImage(img`
            .............fffff............
            ...........ff11dddff..........
            ..........f111dddddbf.........
            ..........f1dddddddbf.........
            ..........fddddddddbf.........
            ...........fddddddbf..........
            ...........fddddddbf..........
            ............fddddbf...........
            ............fddddbf...........
            .............fbbbf............
            ..............fff.............
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `)
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.y += -1
        }
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.y += 1
        }
        Shield.y = 90
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fight_Active == 1) {
        Shield.setImage(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ....ff........................
            ..ff1df.......................
            .f11ddf.......................
            .f1dddf.......................
            f1ddddf.......................
            fddddbf.......................
            fddddbf.......................
            .fdddbf.......................
            .fddbf........................
            ..fbbf........................
            ...ff.........................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `)
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.x += -1
        }
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.x += 1
        }
        Shield.x = 75
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fight_Active == 1) {
        Shield.setImage(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ........................ff....
            .......................f11ff..
            .......................fdd11f.
            .......................fddd1f.
            .......................fdddddf
            .......................fdddddf
            .......................fbddddf
            .......................fbddbf.
            ........................fbdbf.
            ........................fbbf..
            .........................ff...
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `)
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.x += 1
        }
        for (let index = 0; index < 4; index++) {
            pause(10)
            Shield.x += -1
        }
    }
    Shield.x = 75
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Map_Asset = sprites.create(assets.image`Map Asset`, SpriteKind.Sprite)
    Map = sprites.create(img`
        .............................................
        .......ff....................................
        .....ffeefffff........................f......
        ...ffeee444444fffff.................ff4f.....
        ..feee44ee444444444fffffffffffffffff444f.....
        ..fe444e44444444f44444444444444444444444f....
        ..fe44444444444f4f4444444444444444444444f....
        ..fe4eff444444f444f4444444444444444444444f...
        ..feef..f44444fffff44444444444f4444444444f...
        ..feef.f44444444f444444444444f4f4444444444f..
        ..fe4ef444444444444444444444f444f444444444f..
        ..fe44444444444444444ff44444fffff444444444f..
        ..fe4444444444444444f44f444444f444444444fff..
        ..fee44444444f444444f44f4444444444ffffff44f..
        ...fe4e44444f4f444444ff44444444fff44444444f..
        ...fe4e4444f444f44444f444444fff4444444444f...
        ...fe444444fffff444f4f4f4fff4444444444ffff...
        ...fee4444444f444fff4f4ff444444444ffff444f...
        ....fee44ffff44ff4f44f4f44444fffff4444444f...
        .....feff4444ff444f4f44f4ffff444444444444f...
        .....fe4444444444ff4f4fff444444444444444f....
        .....fe44ffff44ff444f4f444444444444ef44f.....
        .....feff4444ff444ff44444444444444ef.f4f.....
        .....fe4444444444f44f444444444f4444ef44f.....
        .....fe4444444444f44f44444444f4f4444444f.....
        .....fe44e44444444ff44444444f444f444444f.....
        .....fe4e444444444f444444444fffff44444f......
        .....fe4e444444f444f4444444444f4444444f......
        .....fe4444444f4f444f44444444444444444f......
        .....fe444444f444f44f44444444444444444f......
        ....fee444444fffff44f4ff4444444444444f.......
        ....fe444444444f4444ff44f444444444444f.......
        ....fe4ef444444444444f44f444444f44444f.......
        ....feef.f444444444444ff444444f4f4444f.......
        ...feeef.f4444444444444f44444f444f444f.......
        ...feef.f44444444444444f44444fffff44f........
        ...fe4ef4444f4444444444f4444444f4444f........
        ..fee444444f4f444444444f444444444444f........
        ..fe4e4444f444f4444444f4444444444444f........
        ..fe4e4444fffff4444444f44444444444444f.......
        ..fe44e44444f444444444f44444444444444f.......
        ..fee444444444444fffffffffffe44444444f.......
        ...feeeefffffffff...........ffffff4444f......
        ....ffff..........................ffff.......
        .............................................
        `, SpriteKind.Sprite)
    Map.scale = 2
    Map_Asset.scale = 1
    Map_Asset.setPosition(120, 80)
    pauseUntil(() => controller.B.isPressed())
    sprites.destroy(Map)
    sprites.destroy(Map_Asset)
})
let Map: Sprite = null
let Map_Asset: Sprite = null
let Fight_Active = 0
let Shield: Sprite = null
game.setDialogTextColor(1)
game.setDialogFrame(assets.image`Text Box`)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 d . . . . . . . 
    . . . . . . 1 d 1 d . . . . . . 
    . . . . . . 1 d 1 d . . . . . . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . . 1 1 1 1 1 d . . . . . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . 1 d . . . . 1 d . . . . 
    . . . . 1 d . . . . 1 d . . . . 
    . . . 1 1 1 d . . 1 1 1 d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("The Weeping Fields, a place where those forgotten and useless can find a purpose.", DialogLayout.Full)
game.showLongText("There are many lingering tales of awful monstrosities that call this land home.", DialogLayout.Full)
game.showLongText("In the summer of 202# a young child entered this field, and upon entry the plants behind him/her immediately close leaving no exit.", DialogLayout.Full)
game.showLongText("After walking in search for a way out, this child comes across a map.", DialogLayout.Full)
game.showLongText("\"This map\" (s)he thought \"may lead to another exit!\" this exited the child, and (s)he ran off. [Press Menu to open map]", DialogLayout.Full)
game.showLongText("\"This map\" (s)he thought \"may lead to another exit!\" this exited the child, and (s)he ran off. [Press Menu to open map]", DialogLayout.Full)
Shield = sprites.create(img`
    .............fffff............
    ...........ff11dddff..........
    ..........f111dddddbf.........
    ..........f1dddddddbf.........
    ..........fddddddddbf.........
    ...........fddddddbf..........
    ...........fddddddbf..........
    ............fddddbf...........
    ............fddddbf...........
    .............fbbbf............
    ..............fff.............
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Sprite)
let Character = sprites.create(assets.image`Player`, SpriteKind.Player)
Character.setPosition(75, 90)
Shield.setPosition(75, 90)
Shield.scale = 2
Character.scale = 2
Fight_Active = 1
