import { apiCaller } from "./apiCaller";

export const getTodosApi = async () => {
	const url = process.env.REACT_APP_BASE_URL + "/todo";
	const response = await apiCaller(url, "get");
	return response;
};
