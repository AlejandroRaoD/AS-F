import axios from "axios";
import { API_SERVER_URL } from ".";
import { getToken } from "@/app/system/user/helper/userLocalStorage.helper";

const abreuSystemAPI = axios.create({
	baseURL: API_SERVER_URL,
	// withCredentials: true,
});

abreuSystemAPI.interceptors.request.use((config) => {
	config.headers["x-access-token"] = getToken();
	return config;
});

export default abreuSystemAPI;
