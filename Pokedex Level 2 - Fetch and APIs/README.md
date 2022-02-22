# Pokedex Level 2 - Using Fetch

- Fetch() and APIs to get full pokedex data
  - [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
  - try [https://pokeapi.co/api/v2/pokemon/ditto](https://pokeapi.co/api/v2/pokemon/ditto) in browser
  - try [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon) - only goes to 20, add ?limit=150
  - base-url, endpoint, parameters (aka query strings)
  - how to get this data in our js? Fetch
    - try fetch(”https://pokeapi.co/api/v2/pokemon/?limit=150”) in console (in an actual site)
    - notice a pending “promise”, expand to see the “response” object contains something called a Readable Stream
- Promises & Async/Await

  - When a js function needs to return something later, it can instead return a “promise” for that thing
  - This lets the rest of the code continue to run (and the rest of the js event loop to stay unblocked)
  - We just need to provide some code to let the runtime engine (browser) know what it should do when that promise is fulfilled
  - We tack a .then() to any function call that will return a promise, and pass in a callback function for what to do with the response

  ```jsx
  //using anonymous function
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function (
  	response
  ) {
  	//do something with the response, eg log to the console:
  	console.log(response);
  });

  //OR using arrow function (preferred)
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then((response) => {
  	//do something with the response, eg log to the console:
  	console.log(response);
  });
  ```

  - In this case (and most cases) when the response contains JSON data, it is delivered in a “Readable Stream”, which we need to decode (turn it into a useable variable). To do this, we use the .json() function on the response, which also returns a promise so we just need to chain on another .then() function

  ```jsx
  //using anonymous function
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  	.then(function (response) {
  		return response.json(); //need to return the .json() promise for the 2nd .then()
  	})
  	.then(function (data) {
  		//do something with the decoded data, eg log it:
  		console.log(data);
  	});

  //OR using arrow function (preferred)
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  	.then((response) => response.json())
  	.then((data) => console.log(data));
  ```

  - These .then() chains can get kind of messy, luckily there’s some fairly new ‘syntactic sugar’ in JS called Async/Await. We’ll cover this at a later date
  - Notice the actual array of pokemon is a parameter called ‘results’ this data object, along with some other meta data (count, next, previous).
  - Save that out as a variable, loop through it, and call our addPokemon function for each pokemon in the array (using a hacky trick of using the pokemon’s position in the array to find it’s number, this only really works in this example)

  ```jsx
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
  ```

- Bonus: add some CSS to make it a nice grid:
  ```css
  ul {
  	display: flex;
  	padding: 0;
  	flex-wrap: wrap;
  	justify-content: center;
  }
  li {
  	list-style-type: none;
  	border: 2px solid black;
  	border-radius: 10px;
  	margin: 4px;
  	padding: 12px;
  }
  h3 {
  	margin-top: 0;
  }
  ```
