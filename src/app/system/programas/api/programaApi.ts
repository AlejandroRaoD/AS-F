import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { programaAttributes } from "../interfaces/programa.interface";
import { QueryProgramaDto } from "../dto/query-programa.dto";
import { CreateProgramaDto } from "../dto/create-programa.dto";
import { UpdateProgramaDto } from "../dto/update-programa.dto";

const url = `programa`;

export const getPrograma_Request = async (
	id: string
): PromiseFormatRes<programaAttributes> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getProgramas_Request = async (
	query?: QueryProgramaDto
): PromiseFormatRes<programaAttributes[]> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createPrograma_Request = async (
	data: CreateProgramaDto
): PromiseFormatRes<programaAttributes> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updatePrograma_Request = async (
	id: string,
	data: UpdateProgramaDto
): PromiseFormatRes<programaAttributes> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deletePrograma_Request = async (
	id: string
): PromiseFormatRes<programaAttributes> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
