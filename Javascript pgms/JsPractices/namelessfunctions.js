//we can use these type of aninymous function when set timeout etc.
//Immediate execution of a function
//
(function() {  
    console.log('Hello');  
})();  
var sum = function(a,b){
	return a+b;
}
var mul = function(a,b)
{
	return a*b;
}
function abc(x,y)
{
	//console.log(typeof x);
	console.log(x(10,20));
	console.log(y(10,20));
}
abc(sum,mul);
bsc(function(a,b){
	return a+b;
});
function bsc(x)
{
	console.log(x(25,25));
}