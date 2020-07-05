controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 50)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.setPosition(77, 54)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -50)
})
info.onLifeZero(function () {
    if (game.ask("End the game?")) {
        game.over(false)
    } else {
        info.setLife(3)
        mySprite.setPosition(77, 54)
    }
})
let enemy4: Sprite = null
let enemy3: Sprite = null
let enemy2: Sprite = null
let enemy1: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f f 2 2 f f f . . . . . . . . 
. . . . . . . f f f 2 2 2 2 f f f . . . . . . . 
. . . . . . f f f e e e e e e f f f . . . . . . 
. . . . . . f f e 2 2 2 2 2 2 e e f . . . . . . 
. . . . . . f e 2 f f f f f f 2 e f . . . . . . 
. . . . . . f f f f e e e e f f f f . . . . . . 
. . . . . f f e f b f 4 4 f b f e f f . . . . . 
. . . . . f e e 4 1 f d d f 1 4 e e f . . . . . 
. . . . . . f f f f d d d d d e e f . . . . . . 
. . . . . f d d d d f 4 4 4 e e f . . . . . . . 
. . . . . f b b b b f 2 2 2 2 f 4 e . . . . . . 
. . . . . f b b b b f 2 2 2 2 f d 4 . . . . . . 
. . . . . . f c c f 4 5 5 4 4 f 4 4 . . . . . . 
. . . . . . . f f f f f f f f . . . . . . . . . 
. . . . . . . . . f f . . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(1)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
if (game.ask("Enable enemies?", "")) {
    enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    enemy1.setPosition(140, 56)
    enemy2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    enemy2.setPosition(20, 55)
    enemy3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    enemy3.setPosition(78, 99)
    enemy4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    enemy4.setPosition(77, 17)
    info.setLife(3)
}
