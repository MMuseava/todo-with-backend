import { useState, createContext } from "react";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./components/todo/Todo";
import NavBar from "./components/navBar/NavBar";

export const AuthContext = createContext(null);

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			<div className="container">
				<NavBar />
				<ToastContainer position="top-center" autoClose={2000} />
				{isAuthenticated ? <Todo /> : <Login />}
			</div>
		</AuthContext.Provider>
	);
}

export default App;
