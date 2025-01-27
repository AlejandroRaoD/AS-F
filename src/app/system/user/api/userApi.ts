import abreuSystemAPI from "@/config/AxiosInstance";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { UserAttributes } from "../interfaces/user.interface";

const url = `user`;

export const getUser_Request = async (
	id: string
): PromiseFormatRes<UserAttributes> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getUsers_Request = async (): // query?: QueryUserDto
PromiseFormatRes<userAttributes[]> =>
	(
		await abreuSystemAPI.get(
			url
			//  { params: query }
		)
	).data;

export const createUser_Request = async (
	data: CreateUserDto
): PromiseFormatRes<userAttributes> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateUser_Request = async (
	id: string,
	data: UpdateUserDto
): PromiseFormatRes<userAttributes> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteUser_Request = async (
	id: string
): PromiseFormatRes<userAttributes> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
