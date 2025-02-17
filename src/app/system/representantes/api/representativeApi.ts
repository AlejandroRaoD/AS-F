import abreuSystemAPI from "@/config/AxiosInstance";
import { QueryRepresentativeDto } from "../dto/query-representative.dto";
import { CreateRepresentativeDto } from "../dto/create-representative.dto";
import { UpdateRepresentativeDto } from "../dto/update-representative.dto";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { representativeAttributes } from "../interfaces/representative.interface";

const url = `representative`;

export const getRepresentative_Request = async (
	id: string
): Promise<PromiseFormatRes<representativeAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getRepresentatives_Request = async (
	query?: QueryRepresentativeDto
): Promise<PromiseFormatRes<representativeAttributes[]>>  =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createRepresentative_Request = async (
	data: CreateRepresentativeDto
): Promise<PromiseFormatRes<representativeAttributes>>  =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateRepresentative_Request = async (
	id: string,
	data: UpdateRepresentativeDto
): Promise<PromiseFormatRes<representativeAttributes>>  =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteRepresentative_Request = async (
	id: string
): Promise<PromiseFormatRes<representativeAttributes>>  =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
