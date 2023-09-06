import React, { useState, useContext } from "react";
import { TaskContext } from "./Page";

const Add = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useContext(TaskContext);

	const handleAdd = () => {
		setTasks([...tasks, task]);
		setTask("");
	};

	return (
		<div
			className="flex flex-col items-center"
			onKeyDown={(e) => {
				if (e.key == "Enter") handleAdd();
			}}
		>
			<h1 className="text-2xl font-semibold text-white my-2">Add A Task</h1>
			<input
				className="w-3/5 py-1.5 mt-4 mb-8 rounded-2xl text-center text-lg"
				type="text"
				placeholder="Enter text"
				value={task}
				onChange={(e) => {
					setTask(e.target.value);
				}}
			/>
			<button
				className="py-1.5 px-10 rounded-3xl border-2 border-blue-950 text-xl font-semibold text-white"
				onClick={handleAdd}
			>
				Add
			</button>
			<pre>{JSON.stringify(tasks)}</pre>
		</div>
	);
};

export default Add;
