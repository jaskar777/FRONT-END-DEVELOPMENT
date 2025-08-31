var a = 20;
console.log(a);
{
    let b = 200;
    console.log(b);
}

{
    var c = 1000;
    console.log(c);
}
console.log(c);

//apple 
/*helo
world*/
  

var i = 100;
i++;
console.log(i);

var g = 100;
console.log(g++); //same 100 

var f = 100;
console.log(++f);

var t = 100;
++t;
console.log(t);//101 

var r = 100;
r--;
console.log(r);

var d = 100;
console.log(--d);


var a1 = 10;
var b1 = a1++;//b1 is 10 
console.log(b1);//10
console.log(a1);//11 


var f1 = 10;
var g1 = ++f1;
console.log(g1);//11 i
console.log(f1);//11

console.log(typeof (10));
console.log(typeof ("jas"));
console.log(typeof (true));
let un;
console.log(typeof (un));//undefined
 
function abs() {
    console.log("bike");
}
abs();

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

 
let player = "dhoni";
function cricket() {
    console.log("My favourite player: " + player);
}
cricket();

function area(l, b) {
    console.log(l * b);
}
area(10, 20);   

function myname() {
    return "jaskar";
}
myname();

var g10 = myname();
console.log(g10);

function mul(i, j) {
    return (i * j);
}

console.log(mul(100, 2000));

if (false  ) {
    console.log("take umbrella");
}
else {
    console.log("not take umbrella");
}