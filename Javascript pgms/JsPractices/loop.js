function printseqal()
{
	for(i=1;i<10;i++)
	{
		console.log(i);
	}
}
 //Write a JS code to print a 2D array
  function twodArray()
 {
 	let a = new Array();
 	a = [[1,2,3,4],[99,88,77,44,55]];
 	console.log("two dimentional Array is given below");
 	for(i=0;i<a.length;i++)
 	{
 		for(j=0;j<a[i].length;j++)
 		{
 			console.log(a[i][j]);
 		}
 	}
 }
 var given = new Array();
 given = [1,2,3,4,99,88,77,44,55,77,1,3,5,6];

 //Write a JS code to print Even numbers in given array

  function evenNumbers()
  {
  	console.log("Even Numbers of given Array Are ");
  	given.forEach(function(value){
  		if(value %2 == 0)
  		{
  			console.log(value);
  		}
  	});
  }


 //Write a JS code to delete all occurrence of element in given array
 function occuerencDeletion()
 {

 	
 	let test = given;
 	console.log("Actual array is");
 	console.log(given);
 	for(i in test)
 	{
 	 	let c =0;
 		for(j in test)
 		{
 			if(test[i] == test[j])
 			{
 				c++;
 				
 			}
 			if(c>1)
 			{
 				//console.log(j);
 				test.splice(j,1);
 			}
 		}

 	}
 	console.log("After Deletion of duplicate value");
 	console.log(test);



 }
// Write a JS code to print a pattern using for loop
function patternPrinting()
{
	console.log("PAttern is");
	for(let i = 1;i<=8; i++)
	{
		let str = "";
		for(let j=1;j<=i;j++)
		{
			str +=j;
		}
		console.log(str);
	}
}
//Write a JS code to find the largest number in an array

function largest()
{
	let given = [1,2,3,4,99,88,77,44,55,77,1,3,5,6];
	let temp =0;
	for(let i in given)
	{
		for(let j in given)
		{
			if(given[i]<given[j])
			{
				if(temp < given[j]){temp =given[j];}
			}
		}
	}
	console.log("given array is");
	console.log(given);
	console.log('largest no is ='+temp);
}
//Write a JS code to find the number of zeros in 2D Matrix

function countof()
{
	let  arr = [[0,1,1],[0,1,0],[1,0,0]];
	let count=0;

	for(let i =0;i<arr.length;i++)
	{
		for(j=0;j<arr[i].length;j++)
		{
			if(arr[i][j] == 0)
			{
				count++;
			}
		}
	}
	console.log("no of 0 are = " +count);

}
