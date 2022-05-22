import React, { useState } from "react";
import TextInput from "components/TextInput";
import RangeInput from "components/RangeInput";
import Button from "components/Button";
import { RiSave3Fill, RiCloseFill } from "react-icons/ri";
import { updatePokemon } from "api";

export default function EditPokemon({ selected, onCancel, refreshList }) {
	const [disabled, setDisabled] = useState(true);
	const [invalidName, setinvalidName] = useState(false);

	return (
		<section className="form-container">
			<h2>Editar Pokemon</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (disabled) {
						return;
					}
					const pokemon = {
						hp: selected.hp,
						type: selected.type,
						name: e.target[0].value,
						image: e.target[1].value,
						attack: parseInt(e.target[2].value),
						defense: parseInt(e.target[3].value),
						idAuthor: selected.idAuthor,
					};
					try {
						const response = await updatePokemon(
							selected.id,
							pokemon
						);
						if (!response.ok) throw new Error("Error");
						refreshList();
						onCancel();
					} catch (e) {
						console.log(e);
					}
				}}
			>
				<div className="input-group">
					<div className="input-column">
						<TextInput
							label={"Nombre"}
							labelId="name"
							name="name"
							className={invalidName ? "invalid" : ""}
							onBlur={(e) =>
								e.target.value === ""
									? setDisabled(true) || setinvalidName(true)
									: setDisabled(false) ||
									  setinvalidName(false)
							}
							initialValue={selected.name}
						/>
						<TextInput
							label={"Imagen"}
							labelId="image"
							name="image"
							placeholder={"url"}
							initialValue={selected.image}
							onBlur={() => setDisabled(false)}
						/>
					</div>
					<div className="input-column">
						<RangeInput
							label={"Ataque"}
							labelId="attack"
							name="attack"
							initialValue={selected.attack}
							onBlur={(e) => setDisabled(false)}
						/>
						<RangeInput
							label={"Defensa"}
							labelId="defense"
							name="defense"
							initialValue={selected.defense}
							onBlur={(e) => setDisabled(false)}
						/>
					</div>
				</div>
				<div className="button-group">
					<Button
						text="Guardar"
						icon={<RiSave3Fill />}
						disabled={disabled}
						onClick={() => {}}
					/>
					<Button
						text="Cancelar"
						icon={<RiCloseFill />}
						type="button"
						onClick={onCancel}
					/>
				</div>
			</form>
		</section>
	);
}
