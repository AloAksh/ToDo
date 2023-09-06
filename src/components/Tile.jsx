import React, { useState } from "react";

let ind = 0;
const Tile = (prop) => {
	const { contents, trail, flag, onclick, handleEdit } = prop;
	const img_loc = `/assets/${trail}.png`;
	const [upTask, setUpTask] = useState("");

	return (
		<>
			{flag ? (
				<div
					className="flex"
					onKeyDown={(e) => {
						if (e.key == "Enter") handleEdit(upTask, ind);
					}}
				>
					<input
						type="text"
						className="py-1 px-10 mx-5 rounded-3xl border-2 border-blue-950 text-xl font-semibold"
						value={upTask}
						onChange={(e) => {
							setUpTask(e.target.value);
						}}
					/>
					<button
						className="py-1.5 px-10 rounded-3xl border-2 border-blue-950 text-xl font-semibold text-white"
						onClick={() => {
							handleEdit(upTask, ind);
							setUpTask("");
						}}
					>
						Edit
					</button>
				</div>
			) : null}
			<table className="mt-4 w-3/5">
				<tbody>
					{contents.map((task, index) => {
						return (
							<tr key={index} className="">
								<td className="px-5 py-2 border-blue-950 border-2 text-center text-xl">
									{task}
								</td>
								{trail != null ? (
									<td className="px-5 py-2 border-blue-950 border-2 text-center text-xl">
										<button
											onClick={(e) => {
												ind = index;
												onclick(index);
												if (trail == "edit") setUpTask(task);
											}}
										>
											<img src={img_loc} className="h-4" />
										</button>
									</td>
								) : null}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Tile;
