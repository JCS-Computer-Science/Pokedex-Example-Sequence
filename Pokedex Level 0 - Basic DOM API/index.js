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

addPokemon("Gengar", 94);
addPokemon("Mew", 151);
addPokemon("Muk", 89);
