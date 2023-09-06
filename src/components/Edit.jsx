import React, { useState, useContext } from "react";
import { TaskContext } from "./Page";
import Tile from "./Tile";

const Edit = () => {
	const [tasks, setTasks] = useContext(TaskContext);
	const [flag, setFlag] = useState(false);

	const handleEdit = (updTask, ind) => {
		var updated = [...tasks];
		tasks.map((task, index) => {
			if (ind == index) updated[ind] = updTask;
		});
		setTasks(updated);
		setFlag(false)
	};

	const handleAction = () => setFlag(!flag);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-semibold text-white my-2">Edit</h1>
			<Tile
				contents={tasks}
				trail="edit"
				onclick={handleAction}
				flag={flag}
				handleEdit={handleEdit}
			/>
		</div>
	);
};

export default Edit;
