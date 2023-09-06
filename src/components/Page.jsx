import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const TaskContext = React.createContext();

const Page = () => {
	const [tasks, setTasks] = useState([]);

	return (
		<>
			<Navbar />
			<TaskContext.Provider value={[tasks, setTasks]}>
				<Outlet />
			</TaskContext.Provider>
		</>
	);
};

export default Page;
