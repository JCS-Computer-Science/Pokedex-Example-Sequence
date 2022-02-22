function addPokemon(name, num) {
	let newPokemon = document.createElement("li");

	let newName = document.createElement("h3");
	newName.innerHTML = name;
	newPokemon.appendChild(newName);

	let newNumber = document.createElement("h4");
	newNumber.innerHTML = `Number: ${num}`;
	newPokemon.appendChild(newNumber);

	let newImage = document.createElement("img");
	newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;
	newImage.alt = name;
	newImage.width = 100;
	newPokemon.appendChild(newImage);

	let list = document.getElementById("list");
	list.appendChild(newPokemon);
}

fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data.results);
		for (let i = 0; i < data.results.length; i++) {
			addPokemon(data.results[i].name, i + 1);
		}
	});
