/*document.getElementById("btn").addEventListener('click',()=>{
			var name = document.getElementById('name').value;
			
			var age = document.getElementById('age').value;
			var temp = `${name} is ${age} Year old`;
			document.getElementById('sample').innerHTML = temp; 
			
		});*/


document.addEventListener('DOMContentLoaded',()=>{
	//document.writeln("welcome !!!!");
	document.querySelector('h1').innerHTML = "welcome !!!!";
});


var count =0;
var timeinter = setInterval(() => {
		document.getElementById('sym').innerHTML += '_';
		document.getElementById('per').innerHTML = `${count}%`;
		count++;
		if(count==100){clearInterval(timeinter);
			document.getElementById('per').innerHTML ='Uploaded Sucessfully';
			setTimeout(() => {
				document.getElementById('sub').innerHTML = "What is Lorem Ipsum?";
	document.querySelector("p").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum<a href ='#'>more...</a>";
	document.querySelector('a').addEventListener('click',()=>{
	document.getElementById("more").innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here";

	});

	
			}, 30);
			
		}
}, 50);
//document.getElementById("more").innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here");

//document.querySelector('a').addEventListener('click',()=>alert('hii'));


