export const fetchPokemons = async (author) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=${author}`
	).then(json);
	return response;
};

export const fetchPokemonsByName = async (author, name) => {
	const response = await fetch(
		`https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=${author}&name=${name}`
	);

	return response;
};
