import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { UserLoggedAttributes } from "../interfaces/user.interface";
import { LoginDto } from "../dto/login.dto";
import { TokenRes } from "../dto/token.dto";

const url = `user`;

export const Login_Request = async (credentials: LoginDto): Promise<TokenRes> =>
	(await abreuSystemAPI.post(`${url}/signin`, credentials)).data;

export const getProfile_Request =
	async (): PromiseFormatRes<UserLoggedAttributes> =>
		(await abreuSystemAPI.get(`${url}/profile`)).data;
