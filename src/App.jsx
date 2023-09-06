import "./App.css";
import Page from "./components/Page";
import Add from "./components/Add";
import List from "./components/List";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Page />,
		children: [
			{
				path: "/add",
				element: <Add />,
			},
			{
				path: "/delete",
				element: <Delete />,
			},
			{
				path: "/edit",
				element: <Edit />,
			},
			{
				path: "/list",
				element: <List />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
