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

let pokemonData = [
	{ name: "Gengar", number: 94 },
	{ name: "Mew", number: 151 },
	{ name: "Muk", number: 89 },
];

for (let i = 0; i < pokemonData.length; i++) {
	addPokemon(pokemonData[i].name, pokemonData[i].number);
}

// Other ways of looping through an array:

// pokemonData.forEach(function (pokemon) {
// 	addPokemon(pokemon.name, pokemon.number);
// });

// pokemonData.forEach((pokemon) => {
// 	addPokemon(pokemon.name, pokemon.number);
// });
