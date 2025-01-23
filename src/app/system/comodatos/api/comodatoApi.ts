import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { QueryComodatoDto } from "../dto/query-comodato.dto";
import { CreateComodatoDto } from "../dto/create-comodato.dto";
import { UpdateComodatoDto } from "../dto/update-comodato.dto";
import { ComodatoAttributes } from "../interfaces/comodato.interface";

const url = `comodato`;

export const getComodato_Request = async (
	id: string
): PromiseFormatRes<ComodatoAttributes> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getComodatos_Request = async (
	query?: QueryComodatoDto
): PromiseFormatRes<comodatoAttributes[]> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createComodato_Request = async (
	data: CreateComodatoDto
): PromiseFormatRes<comodatoAttributes> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateComodato_Request = async (
	id: string,
	data: UpdateComodatoDto
): PromiseFormatRes<comodatoAttributes> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteComodato_Request = async (
	id: string
): PromiseFormatRes<comodatoAttributes> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
