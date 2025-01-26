import { UserAttributes, UserLoggedAttributes } from "../interfaces/user.interface";

export const getUser = (): UserLoggedAttributes | null => {
	const str = localStorage.getItem("profile");

	if (!str) return null;

	return JSON.parse(str) as UserLoggedAttributes;
};

export const setUser = (data: UserLoggedAttributes) => {
	localStorage.setItem("profile", JSON.stringify(data));
};

export const logout = () => {
	localStorage.removeItem("profile");
	localStorage.removeItem("token");
};

export const setToken = (token: string) => {
	localStorage.setItem("token", token);
};

export const getToken = (): string => localStorage.getItem("token");
