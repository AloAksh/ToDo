import React, { useContext } from "react";
import Tile from "./Tile";
import { TaskContext } from "./Page";

const Delete = () => {
	const [tasks, setTasks] = useContext(TaskContext);

	const handleAction = (index) => {
		let updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-semibold text-white my-2">Delete</h1>
			<Tile contents={tasks} trail="delete" onclick={handleAction} />
		</div>
	);
};

export default Delete;
