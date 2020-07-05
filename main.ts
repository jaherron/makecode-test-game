namespace SpriteKind {
    export const Button = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 3 3 b . . 
. . . . . . b b e 3 2 e 3 a . . 
. . . . b b 3 3 e 2 2 e 3 3 a . 
. . b b 3 3 3 3 3 e e 3 3 3 a . 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
b 3 3 3 d d d d 3 3 3 3 3 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 5 5 5 5 d b b b a a a a a a 
b 3 d d 5 5 5 5 5 5 5 d d d d a 
b 3 3 3 3 3 3 d 5 5 5 d d d d a 
b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
b b b 3 d 5 5 5 5 5 5 5 d d b a 
. . . b b b 3 d 5 5 5 5 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Food)
    mySprite2.setPosition(25, 20)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    mySprite.say("*nom*", 500)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.say("ouch", 500)
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
let mySprite3: Sprite = null
let mySprite2: Sprite = null
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
    mySprite2 = sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 3 3 b . . 
. . . . . . b b e 3 2 e 3 a . . 
. . . . b b 3 3 e 2 2 e 3 3 a . 
. . b b 3 3 3 3 3 e e 3 3 3 a . 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
b 3 3 3 d d d d 3 3 3 3 3 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 5 5 5 5 d b b b a a a a a a 
b 3 d d 5 5 5 5 5 5 5 d d d d a 
b 3 3 3 3 3 3 d 5 5 5 d d d d a 
b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
b b b 3 d 5 5 5 5 5 5 5 d d b a 
. . . b b b 3 d 5 5 5 5 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Food)
    mySprite2.setPosition(25, 20)
    mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 . . . . 
. . . . 6 9 9 9 9 9 9 9 6 . . . 
. . . 6 9 9 9 9 9 9 9 9 9 6 . . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . 6 9 9 9 9 9 9 9 9 9 9 9 6 . 
. . . 6 9 9 9 9 9 9 9 9 9 6 . . 
. . . . 6 9 9 9 9 9 9 9 6 . . . 
. . . . . 6 6 6 6 6 6 6 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Button)
    mySprite3.setPosition(129, 19)
    info.setLife(3)
}
