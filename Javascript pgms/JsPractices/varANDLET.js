var a =22;
let b = 66;
console.log("outside abc function a is ="+a);
abc();
function abc()
{
	var a = 50;
	let b = 100;
	console.log("inside abc function a is = "+a);
	console.log("inside abc function b is = "+b);
}
console.log("After execuiting the abc function the value of a is = "+a);
console.log("inside abc function b is = "+b);

//LET
console.log("value inside the forloop");
for(let i =0;i<5;i++)
{
	console.log(i);
}
//console.log(i); error will come not declaired
//VAR
for(var j= 0;j<5;j++)
{

}
console.log("value of var after the block"+j);
/* LET
let is block-scoped.
let does not allow to redeclare variables.
Hoisting does not occur in let.
*/

/*VAR
var is function scoped.
var allows to redeclare variables.
Hoisting occurs in var.
*/