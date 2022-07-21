const input = "KINGs";
let piece = input.toLowerCase();
let movement = "";

switch (piece){
    case "king":
        movement = "moves one square in any direction.";
        break;
    
    case "queen":
        movement = "moves diagonally, horizontally, or vertically any number os squares.";
        break;

    case "rook":
        movement = "moves horizontally or vertically any number of squares.";
        break;

    case "bishop":
        movement = "moves diagonally any number of squares.";
        break;

    case "knight":
        movement = "moves in an L shape. Two squares in a horizontal or vertical direction, then move one more square horizontally or vertically.";
        break;

    case "pawn":
        movement = "moves vertically foward one square, with the option to move two squares if they have not yet moved.";
        break;

    default:
        movement = "is an invalid piece. Try to write it in the singular form.";
}

console.log(piece + " " + movement);