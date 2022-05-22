import React from "react";

export default React.memo(function Table({ columns, data }) {
	return (
		<>
			<table>
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column.name}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data ? (
						data.map((row) => (
							<tr key={row.id}>
								{columns.map((column, index) => (
									<td key={index}>
										{column.formatter
											? column.formatter(row)
											: row[column.key]}
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td
								colSpan={columns.length}
								style={{ textAlign: "center" }}
							>
								No hay datos
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
});
