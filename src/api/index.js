export const fetchPokemons = async (author) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=${author}`
	);
	return response;
};

export const fetchPokemonsByName = async (author, name) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=${author}&name=${name}`
	);

	return response;
};

export const createPokemon = async (body) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons`,
		{ method: "POST", body: JSON.stringify(body) }
	);

	return response;
};

export const updatePokemon = async (id, body) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`,
		{ method: "PUT", body: JSON.stringify(body) }
	);

	return response;
};
export const deletePokemon = async (id) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`,
		{ method: "DELETE" }
	);

	return response;
};
