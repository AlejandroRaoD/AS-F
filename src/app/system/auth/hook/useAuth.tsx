"use client";

import { useState, useEffect } from "react";
import { Login_Request, getProfile_Request } from "../api/authApi";
import { LoginDto } from "../dto/login.dto";
import {
	UserAttributes,
	UserLoggedAttributes,
} from "../interfaces/user.interface";
import {
	getUser,
	logout,
	setToken,
	setUser,
} from "../helper/userLocalStorage.helper";
import RouterLinks from "@/config/RouterLinks";
import toast from "react-hot-toast";

interface props {
	autoRedirect?: boolean;
	autoLogin?: boolean;
}

const useAuth = (outProps?: props) => {
	const props = {
		autoRedirect: true,
		autoLogin: true,
		...outProps,
	};

	const [userProfile, setUserProfile] = useState<UserLoggedAttributes | null>(
		null
	);

	useEffect(() => {
		if (props.autoLogin) getProfile();
	}, []);

	// obtenerlo del backend
	const getProfile = async (): Promise<UserLoggedAttributes> => {
		try {
			let user = getUser() || (await getProfile_Request()).data;

			setUserProfile(user);
			setUser(user);

			return user;
		} catch (error) {
			toast.error("Error en autenticación");
			if (props.autoRedirect) window.location.replace(RouterLinks.login);
		}
	};

	// obtener token de autenticacion
	const singIn = async (credentials: LoginDto, nextUrl?: string) => {
		singout();

		const { token } = await Login_Request(credentials);
		setToken(token);

		if (nextUrl) window.location.replace(nextUrl);
	};

	// cerrar sesion
	const singout = async () => {
		logout();
		setUserProfile(null);

		if (!outProps?.autoRedirect) window.location.replace(RouterLinks.login);
	};

	return { userProfile, getProfile, singIn, singout };
};

export default useAuth;
