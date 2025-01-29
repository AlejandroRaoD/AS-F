import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { systemLogAttributes } from "../interfaces/systemLog.interface";

const url = `system_log`;

export const getSystemLogs_Request = async (): // query?: QuerySystemLogDto
PromiseFormatRes<systemLogAttributes[]> =>
	(
		await abreuSystemAPI.get(
			url
			// , { params: query }
		)
	).data;
