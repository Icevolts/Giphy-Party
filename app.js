console.log("Let's get this party started!");

function addGif(result){
	let num = result.data.length;
	if(num){
		let random = Math.floor(Math.random() * num);
		let div = document.createElement("div");
		let img = document.createElement("img");
		let gifTable = document.querySelector("#gifTable");
		img.src = result.data[random].images.original.url;
		div.append(img);
		gifTable.append(div);
	}
}

let form = document.querySelector('form');
form.addEventListener('submit', async function(evt){
	evt.preventDefault();
	let searchTerm = document.querySelector('#searchTerm').value;
	searchTerm.value = "";
	let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, 
						api_key: 'n8AkUKQ36yTFwqfqOzkX0vOAx06DrYlB'}});
	addGif(response.data);
	});




let del = document.querySelector("#del");
del.addEventListener("click", function(){
document.querySelector('#gifTable').innerHTML = '';
})