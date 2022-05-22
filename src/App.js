import { useReducer, useState, useEffect } from "react";
import NewPokemon from "containers/NewPokemon";
import EditPokemon from "containers/EditPokemon";
import PokemonList from "containers/PokemonList";
import { fetchPokemons } from "api";

function App() {
	const [activeForm, setActiveForm] = useState(null);
	const [editablePokemon, setEditablePokemon] = useState(null);
	const [refresh, setRefresh] = useState(false);

	const reducer = (state, action) => {
		switch (action.type) {
			case "listPokemons":
				return action.payload;
			case "removePokemon":
				return state.filter((pokemon) => pokemon.id !== action.payload);
			case "filterPokemon":
				return action.payload;
			default:
				return state;
		}
	};

	const initialState = null;

	const [pokemons, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		// set and keep an identifier for the author
		if (!localStorage.getItem("author")) {
			localStorage.setItem("author", Math.floor(Math.random() * 20));
		}

		getPokemons();

		async function getPokemons() {
			const author = localStorage.getItem("author");

			try {
				const response = await fetchPokemons(author);
				const data = await response.json();
				dispatch({
					type: "listPokemons",
					payload: data.length ? data : null,
				});
			} catch (error) {
				alert("Error fetching pokemons");
			}
		}
	}, [refresh]);

	return (
		<main>
			<h1>Listado de Pokemon</h1>
			<PokemonList
				data={pokemons}
				dispatch={dispatch}
				setActive={setActiveForm}
				setEditablePokemon={setEditablePokemon}
			/>
			{activeForm === "new" && (
				<NewPokemon
					onCancel={() => setActiveForm(null)}
					refreshList={() => setRefresh(!refresh)}
				/>
			)}
			{activeForm === "edit" && (
				<EditPokemon
					selected={editablePokemon}
					onCancel={() => setActiveForm(null)}
					refreshList={() => setRefresh(!refresh)}
				/>
			)}
		</main>
	);
}

export default App;
