import abreuSystemAPI from "@/config/AxiosInstance";
import { sedeAttributes } from "@/types";
import { QuerySedeDto } from "../dto/query-sede.dto";
import { CreateSedeDto } from "../dto/create-sede.dto";
import { UpdateSedeDto } from "../dto/update-sede.dto";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";

const url = `sede`;

export const getSede_Request = async (
	id: string
): PromiseFormatRes<sedeAttributes> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getSedes_Request = async (
	query?: QuerySedeDto
): PromiseFormatRes<sedeAttributes[]> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createSede_Request = async (
	data: CreateSedeDto
): PromiseFormatRes<sedeAttributes> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateSede_Request = async (
	id: string,
	data: UpdateSedeDto
): PromiseFormatRes<sedeAttributes> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteSede_Request = async (
	id: string
): PromiseFormatRes<sedeAttributes> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
