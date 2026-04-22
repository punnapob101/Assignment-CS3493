//Case 1
var product = 300;
console.log("value is:", product);

//Case 2
var data = "JS";
var point = 10;
if (point === 10) {
    var data = "C++";
    console.log("Internal: " + data);
}
console.log("External: " + data);

//Case 3
let data1 = "JS";
let point2 = 10;
if (point2 === 10) {
    let data1 = "C++";
    console.log("Internal: " + data1);
}
console.log("External: " + data1);