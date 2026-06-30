var girl = "Daniel";
var boy = "Esther"

if (girl == boy) {
    console.log("false")

} else {
    console.log("false gender selected.");

}


var x = 10;
var y = 11;

var operator = "add"

function calculate(x, y, operator) {
    if (operator == "add") {
        return x + y;
    } else if (operator == "subtract") {
        return x - y;
    } else if (operator == "multiply") {
        return x * y;
    } else if (operator == "divide") {
        return x / y;
    }


}


console.log(calculate(x, y, operator));