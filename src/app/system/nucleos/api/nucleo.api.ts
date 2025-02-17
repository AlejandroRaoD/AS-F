import abreuSystemAPI from "@/config/AxiosInstance";
import { nucleoAttributes } from "@/types";
import { QueryNucleoDto } from "../dto/query-nucleo.dto";
import { CreateNucleoDto } from "../dto/create-nucleo.dto";
import { UpdateNucleoDto } from "../dto/update-nucleo.dto";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";

const url = `nucleo`;

export const getNucleo_Request = async (
	id: string
): Promise<PromiseFormatRes<nucleoAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getNucleos_Request = async (
	query?: QueryNucleoDto
): Promise<PromiseFormatRes<nucleoAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createNucleo_Request = async (
	data: CreateNucleoDto
): Promise<PromiseFormatRes<nucleoAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateNucleo_Request = async (
	id: string,
	data: UpdateNucleoDto
): Promise<PromiseFormatRes<nucleoAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteNucleo_Request = async (
	id: string
): Promise<PromiseFormatRes<nucleoAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
