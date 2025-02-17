import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { catedraAttributes } from "../interfaces/catedra.interface";
import { QueryCatedraDto } from "../dto/query-catedra.dto";
import { CreateCatedraDto } from "../dto/create-catedra.dto";
import { UpdateCatedraDto } from "../dto/update-catedra.dto";

const url = `catedra`;

export const getCatedra_Request = async (
	id: string
): Promise<PromiseFormatRes<catedraAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getCatedras_Request = async (
	query?: QueryCatedraDto
): Promise<PromiseFormatRes<catedraAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createCatedra_Request = async (
	data: CreateCatedraDto
): Promise<PromiseFormatRes<catedraAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateCatedra_Request = async (
	id: string,
	data: UpdateCatedraDto
): Promise<PromiseFormatRes<catedraAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteCatedra_Request = async (
	id: string
): Promise<PromiseFormatRes<catedraAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
