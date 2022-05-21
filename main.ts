/**
 * かんすう
 */
function マイナス (数値: number) {
    return 0 - 数値
}
function fps (数値: number) {
    return 1000 / 数値
}
function add () {
	
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 8 3 8 3 3 3 . . . 
    . . . . . 3 3 3 5 3 3 3 3 . . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . . . . . . . 8 3 3 8 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . 8 . . 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let よこのはやさ = 2
game.onUpdateInterval(fps(30), function () {
    if (controller.right.isPressed()) {
        mySprite.x += よこのはやさ
    }
    if (controller.left.isPressed()) {
        mySprite.x += マイナス(よこのはやさ)
    }
})
