import React, { useContext } from "react";
import Tile from "./Tile";
import { TaskContext } from "./Page";

const List = () => {
	const [tasks, setTasks] = useContext(TaskContext);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-semibold text-white my-2">List</h1>
			<Tile contents={tasks} />
		</div>
	);
};

export default List;
