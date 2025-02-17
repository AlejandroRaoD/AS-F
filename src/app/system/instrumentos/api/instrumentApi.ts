import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { instrumentAttributes } from "../interfaces/instrument.interface";
import { QueryInstrumentDto } from "../dto/query-instrument.dto";
import { CreateInstrumentDto } from "../dto/create-instrument.dto";
import { UpdateInstrumentDto } from "../dto/update-instrument.dto";

const url = `instrument`;

export const getInstrument_Request = async (
	id: string
): Promise<PromiseFormatRes<instrumentAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getInstruments_Request = async (
	query?: QueryInstrumentDto
): Promise<PromiseFormatRes<instrumentAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createInstrument_Request = async (
	data: CreateInstrumentDto
): Promise<PromiseFormatRes<instrumentAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateInstrument_Request = async (
	id: string,
	data: UpdateInstrumentDto
): Promise<PromiseFormatRes<instrumentAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteInstrument_Request = async (
	id: string
): Promise<PromiseFormatRes<instrumentAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
