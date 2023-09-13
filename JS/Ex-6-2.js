/* class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        return !((otherRectangle.topLeftYPos > (this.topLeftYPos+this.length)) ||
        ((otherRectangle.topLeftYPos + otherRectangle.length) < (this.topLeftYPos)) ||
        (otherRectangle.topLeftYPos > (this.topLeftXPos+this.width)) ||
        ((otherRectangle.topLeftXPos + otherRectangle.width) < (this.topLeftXPos)))
    }
}

let greenRec = new Rectangle(3, 6, 4, 3)
let redRec = new Rectangle(8, 5, 2, 5)
let blueRec = new Rectangle(7, 9, 5, 4)
let purpleRec = new Rectangle(7, 9, 5, 4)
let yellowRec = new Rectangle(1, 5, 3, 7)

console.log("Green collides red?");
console.log(greenRec.collides(redRec));

console.log("Green collides purple?");
console.log(greenRec.collides(purpleRec));

console.log("Green collides blue?");
console.log(greenRec.collides(blueRec));

console.log("Green collides yellow?");
console.log(greenRec.collides(yellowRec)); */