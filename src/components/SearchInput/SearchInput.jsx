import React, { useState } from "react";
import TextInput from "components/TextInput";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {

	const onKeyDown = (e) => {
		if (e.key !== "Enter") {
			return
		}
		
	};

	return (
		<TextInput name="search" placeholder={"Buscar"} icon={<FiSearch />} onKeyDown={onKeyDown}/>
	);
}
