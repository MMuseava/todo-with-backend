import React, { useState, useEffect } from "react";
import { addTodoApi } from "../../services/addTodoApi";
import { deleteTodoApi } from "../../services/deleteTodoApi";
import { getTodosApi } from "../../services/getTodosApi";
import { updateTodoApi } from "../../services/updateTodoApi";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const fetchData = async () => {
		try {
			const response = await getTodosApi();

			console.log(response);
			setTodos(response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addTodo = async () => {
		if (inputValue.trim() !== "") {
			try {
				const response = await addTodoApi(inputValue, false);
				console.log(response);
				fetchData();
				setInputValue("");
			} catch (error) {
				console.error("Error adding todo:", error);
			}
		}
	};

	const toggleTodo = async (id) => {
		try {
			const todo = todos.find((todo) => todo.id === id);
			const response = await updateTodoApi(
				id,
				todo.description,
				!todo.isCompleted
			);
			console.log(response);
			fetchData();
		} catch (error) {
			console.error("Error updating todo:", error);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const response = await deleteTodoApi(id);
			console.log(response);
			fetchData();
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	};
	return (
		<div className="container mt-5 ">
			<h1 className="mb-4">Todo List</h1>
			<div className="input-group mb-3 ">
				<input
					type="text"
					className="form-control"
					placeholder="Add a new todo"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="btn btn-primary" onClick={addTodo}>
					Add Todo
				</button>
			</div>
			<ul className=" list-group list-group-numbered ">
				{todos.length &&
					todos?.map((todo, index) => (
						<li
							key={index}
							className={`list-group-item ${
								todo.isCompleted ? "list-group-item-success" : ""
							}`}
						>
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									checked={todo.isCompleted}
									onChange={() => toggleTodo(todo.id)}
								/>
								<label
									className="form-check-label"
									style={{
										textDecoration: todo.isCompleted ? "line-through" : "none",
									}}
								>
									{todo.description}
								</label>
								<button
									className="btn btn-danger btn-sm float-end"
									onClick={() => deleteTodo(todo.id)}
								>
									Delete
								</button>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
}

export default Todo;
