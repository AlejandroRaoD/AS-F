import axios from "axios";
import { API_SERVER_URL } from ".";

const abreuSystemAPI = axios.create({
	baseURL: API_SERVER_URL,
	// withCredentials: true,
});

// abreuSystemAPI.interceptors.request.use((config) => {
// 	config.headers["x-access-token"] = localStorage.getItem("token");
// 	return config;
// });

export default abreuSystemAPI;
