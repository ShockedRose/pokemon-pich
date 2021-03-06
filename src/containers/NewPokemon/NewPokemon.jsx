import React, { useState } from "react";
import TextInput from "components/TextInput";
import RangeInput from "components/RangeInput";
import Button from "components/Button";
import { RiSave3Fill, RiCloseFill } from "react-icons/ri";
import { createPokemon } from "api";

export default function NewPokemon({ onCancel, refreshList }) {
	const [disabled, setDisabled] = useState(true);
	const [invalidName, setinvalidName] = useState(false);

	return (
		<section className="form-container">
			<h2>Agregar Pokemon</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (disabled) {
						return;
					}
					const pokemon = {
						hp: Math.floor(Math.random() * 100),
						type: "normal",
						name: e.target[0].value,
						image: e.target[1].value,
						attack: parseInt(e.target[2].value),
						defense: parseInt(e.target[3].value),
						idAuthor: localStorage.getItem("author"),
					};
					try {
						const response = await createPokemon(pokemon);
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
						/>
						<TextInput
							label={"Imagen"}
							labelId="image"
							name="image"
							placeholder={"url"}
						/>
					</div>
					<div className="input-column">
						<RangeInput
							label={"Ataque"}
							labelId="attack"
							name="attack"
						/>
						<RangeInput
							label={"Defensa"}
							labelId="defense"
							name="defense"
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
