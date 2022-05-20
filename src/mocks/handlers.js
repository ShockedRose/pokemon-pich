import { rest } from "msw";


// Mostrar, editar, eliminar
// (async) It shows a table with pokemons for the user
//   It shows the edit form with the details of the pokemon
//     It has the save button disable
//     It enables the save button with an input change
//     (async) It update the pokemon and shows a successful operation text at the Above the buttons
//     (async) It fails to update the pokemon and shows an error ocurred text above the buttons
//     It hides the form on cancel click
//   (async) It deletes a pokemon and removes it from the table

// Busqueda
// (async) It finds a pokemon and puts it into the table
// (async) It doesn't find a pokemon and shows "No pokemon found at the right side of the input"

// Agregar
// It opens a NewPokemon form after it's clicked
//     It has the save button disabled
//     It enables the save button with an input change
//     It highlights in red the name input if left empty
//     (async) It adds a new pokemon and updates the table
//     It hides the form on cancel click



export const handlers = [
	rest.get(
		"https://pokemon-pichincha.herokuapp.com/pokemons",
		(req, res, ctx) => {
			return res(
				// Respond with a 200 status code
				ctx.status(200)
			);
		}
	),
	rest.get(
		"https://pokemon-pichincha.herokuapp.com/pokemons/:id",
		(req, res, ctx) => {
			return res(
				// Respond with a 200 status code
				ctx.status(200)
			);
		}
	),
	rest.post(
		"https://pokemon-pichincha.herokuapp.com/pokemons",
		(req, res, ctx) => {
			return res(
				// Respond with a 200 status code
				ctx.status(200)
			);
		}
	),
	rest.put(
		"https://pokemon-pichincha.herokuapp.com/pokemons/:id",
		(req, res, ctx) => {
			return res(
				// Respond with a 200 status code
				ctx.status(200)
			);
		}
	),
	rest.delete(
		"https://pokemon-pichincha.herokuapp.com/pokemons/:id",
		(req, res, ctx) => {
			return res(
				// Respond with a 200 status code
				ctx.status(200)
			);
		}
	),
];
