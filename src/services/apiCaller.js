import axios from "axios";
export const apiCaller = async (url, method, params) => {
	let config = {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	};
	if (method === "post" || method === "patch") {
		config.data = params;
	} else if (method === "get") {
		config.params = params;
	}
	try {
		const response = await axios(url, config);
		return response;
	} catch (error) {
		console.log(error);
	}
};
