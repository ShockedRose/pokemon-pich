import React from "react";
import Table from "components/Table";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import pokemonColumns from "./pokemonColumns";
import { IoMdAdd } from "react-icons/io";
import { deletePokemon, fetchPokemonsByName } from "api";

export default function PokemonList({
	data,
	dispatch,
	setActive,
	setEditablePokemon,
}) {
	const onEdit = (pokemon) => {
		setActive("edit");
		setEditablePokemon(pokemon);
	};
	const onDelete = async (pokemonId) => {
		try {
			const response = await deletePokemon(pokemonId);
			if (!response.ok) {
				const error = response.status;
				throw error;
			}
			dispatch({ type: "removePokemon", payload: pokemonId });
		} catch (e) {
			console.log(e);
		}
	};
	const onFilter = async (pokemonName) => {
		const author = localStorage.getItem("author");

		try {
			const response = await fetchPokemonsByName(author, pokemonName);
			if (!response.ok) {
				const error = response.status;
				throw error;
			}
			const data = await response.json();
			dispatch({ type: "filterPokemon", payload: data });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<section className="flex-container w-100 justify-between">
				<SearchInput onFilter={onFilter} />
				<Button
					text="Nuevo"
					icon={<IoMdAdd />}
					onClick={() => setActive("new")}
				/>
			</section>
			<Table columns={pokemonColumns(onEdit, onDelete)} data={data} />
		</>
	);
}
