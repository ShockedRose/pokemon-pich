import { RiEditLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";

export default (onEdit, onDelete) => [
	{
		name: "Nombre",
		key: "name",
	},
	{
		name: "Imagen",
		formatter: (row) => (
			<div className="table-image">
				{row.image && <img src={row.image} alt="Pokemon Image" />}
			</div>
		),
	},
	{
		name: "Ataque",
		key: "attack",
	},
	{
		name: "Defensa",
		key: "defense",
	},
	{
		name: "Acciones",
		formatter: (row) => (
			<div className="table-actions">
				<div onClick={() => onEdit(row)}>
					<RiEditLine />
				</div>
				<div>
					<MdDeleteForever onClick={() => onDelete(row.id)} />
				</div>
			</div>
		),
	},
];
