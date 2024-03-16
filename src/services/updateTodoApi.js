import { apiCaller } from "./apiCaller";

export const updateTodoApi = async (id, description, isCompleted) => {
	const url = process.env.REACT_APP_BASE_URL + `/todo/${id}`;
	const params = {
		description: description,
		isCompleted: isCompleted,
	};

	const response = await apiCaller(url, "patch", params);
	return response;
};
