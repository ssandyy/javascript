//------------Name function......

function testExample(){
  var greeting = "my name is SSandYY";
  console.log(greeting);
}
testExample();



// using return
function testExample2(){
  var greeting = "welcome to javascript this is name function";
  return greeting;
}
console.log(testExample2());


// parameterised function
function testExample3(a){
  var greeting = "hello " +a;
  console.log(greeting)
}
testExample3("sandy");


//----------Ananymous Function........(without name)
var testExample4 = function(){
  var greeting = "hey  this us Anonymous function ";
  return greeting;
}
console.log(testExample4());

//OR

var ssandyy = function(a){
  var greeting = "welcome "+a;
  return greeting;
}
var a= "Scripter";console.log(ssandyy(a));

console.log(ssandyy("programmers !"))



//---------immediately involked funcional expression....(without name)
(function() {
  var greet = "hello javascripters!..";
  console.log(greet);
}())
