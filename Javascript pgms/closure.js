//it is one of the methode in js for accessing variables of parent function 
//from an enclosed function  is called closure
function add(a,b)
{
	function display(c)
	{
		return a+b+c;
		
	}
	return display;
}

function main()
{
	let v = add(3,4);
	console.log(v(7));
}
main();
 