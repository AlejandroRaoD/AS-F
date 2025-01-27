import { useState, useEffect } from "react";
import {
	createUser_Request,
	deleteUser_Request,
	getUser_Request,
	getUsers_Request,
	updateUser_Request,
} from "../api/userApi";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserAttributes } from "../interfaces/user.interface";

interface props {
	id?: string | string[];
	// query?: QueryUserDto;
}

const useUser = (props?: props) => {
	const [user, setUser] = useState<UserAttributes>();
	const [users, setUsers] = useState<UserAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getUser = async (id: string) => {
		if (user) return;

		const { data } = await getUser_Request(id);

		setUser(data);

		return data;
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getUser(props.id);

		// if (props.query && !users.length) getUsers(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getUsers = async () =>
		// query?: QueryUserDto
		{
			const { data } = await getUsers_Request();
			// query

			setUsers(data);

			return data;
		};

	const createUser = async (formData: CreateUserDto) => {
		await createUser_Request(formData);
	};

	const updateUser = async (userId: string, formData: UpdateUserDto) => {
		await updateUser_Request(userId, formData);
	};

	const deleteUser = async (userId: string) => {
		await deleteUser_Request(userId);
	};

	return {
		user,
		users,
		getUser,
		getUsers,
		createUser,
		updateUser,
		deleteUser,
	};
};

export default useUser;
