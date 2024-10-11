controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jogador.y += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectile != 0) {
        tiro = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, jogador, 0, 50)
        projectile += -1
        console.log(projectile)
        if (projectile == 0 && energiaDisponivel == false) {
            energia = sprites.create(img`
                ..........bbbbbb................
                .......bbb444444bb..............
                .....2244444ddd444b.............
                ....244444444dddd44e............
                ...244444444444ddd4be...........
                ..244444444444444d44be..........
                .2b444444444444444d4be..........
                .2b44444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bb4b4444444444444444bbe........
                2bb4444444444444444444be........
                2bb44444444444444444444e........
                2bbb444bbb4444444444444e........
                22bbb444bb4bb444444444be........
                .2bbbbb44bbbb44444444bbe........
                .22bbbbbbbb44bbb444444bbe.......
                ..eeebbbbbbb44bbb444444be.......
                ...eeeeebbbbbbbb44b4444be.......
                .....eeeeee222bb44bbb4bbe.......
                .......eeeee222bb44bbbbee.......
                ............e222bbbbbbbec.......
                ..............ee2bbbbeebdb......
                .................eeeeecdddb.....
                .......................cd11bbbb.
                ........................cd111dbb
                .........................b11111c
                .........................c11dd1c
                .........................cd1dbc.
                .........................cb11c..
                ..........................ccc...
                ................................
                `, SpriteKind.Food)
            energia.setPosition(74, 6)
            energiaDisponivel = true
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    jogador.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    jogador.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    jogador.y += 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (jogador.overlapsWith(energia)) {
        projectile += 10
        sprites.destroy(energia)
        energiaDisponivel = false
    }
})
let energia: Sprite = null
let tiro: Sprite = null
let energiaDisponivel = false
let projectile = 0
let jogador: Sprite = null
console.log("Oi, oi, oi!!!")
jogador = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
projectile = 10
energiaDisponivel = false
