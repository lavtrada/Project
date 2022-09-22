import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function PrinterMethod() {
	const navigate = useNavigate();
	const params = useParams();
	const [data, setData] = useState({});

	useEffect(() => {
		if (params.id > 0) {
			fetch("https://6320a5329f82827dcf316a50.mockapi.io/Printer/" + params.id,
				{
					method: "GET"
				}
			)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					setData(res);
				});
		}
	}, []);

	return (
		<>
			<table>
				<tr>
					<td>Enter the name of Printer</td>
					<td>:</td>
					<td>
						<input value={data.PrinterName}
							onChange={(e) => {
								setData({ setData, PrinterName: e.target.value });
							}}
							type="text" />

					</td>
				</tr>
				<tr>
					<td>Enter The Printer  image </td>
					<td>:</td>
					<td>
						<input value={data.PrinterImage}
							onChange={(e) => {
								setData({ ...data, PrinterImage: e.target.value });
							}}
							type="text" />

					</td>
				</tr>
				<tr>
					<td colSpan="3">
						<button onClick={() => {
							if (params.id > 0) {
								fetch(
									"https://6320a5329f82827dcf316a50.mockapi.io/Printer/" + params.id,
									{
										method: "PUT",
										body: JSON.stringify(data),
										headers: {
											"Content-Type": "application/json"
										}
									}
								).then(() => {
									navigate("/Printers");
								});
							}
							else {
								fetch(
									"https://6320a5329f82827dcf316a50.mockapi.io/Printer",
									{
										method: "POST",
										body: JSON.stringify(data),
										headers: {
											"Content-Type": "application/json"
										}
									}
								).then(() => {
									navigate("/Printers");
								});
							}
						}}
						>
							{params.id > 0 && "Edit  "}
							{!(params.id > 0) && "Add  "}
							Printer
						</button>
					</td>
				</tr>
			</table>
		</>
	)
}