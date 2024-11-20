// global scope
var a = 10;

// function scope
function fun() {
  console.log(a);
  var a = 20;
}

fun();
