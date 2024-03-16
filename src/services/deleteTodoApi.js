import { apiCaller } from "./apiCaller";

export const deleteTodoApi = async (id) => {
	const url = process.env.REACT_APP_BASE_URL + `/todo/${id}`;

	const response = await apiCaller(url, "DELETE");
	return response;
};
