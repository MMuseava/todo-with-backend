import { apiCaller } from "./apiCaller";

export const addTodoApi = async (description, isCompleted) => {
	const url = process.env.REACT_APP_BASE_URL + "/todo";
	const params = {
		description: description,
		isCompleted: isCompleted,
	};

	const response = await apiCaller(url, "post", params);
	return response;
};
