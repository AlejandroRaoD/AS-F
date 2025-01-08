import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import { QueryFurnitureDto } from "../dto/query-furniture.dto";
import { CreateFurnitureDto } from "../dto/create-furniture.dto";
import { UpdateFurnitureDto } from "../dto/update-furniture.dto";

const url = `furniture`;

export const getFurniture_Request = async (
	id: string
): PromiseFormatRes<furnitureAttributes> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getFurnitures_Request = async (
	query?: QueryFurnitureDto
): PromiseFormatRes<furnitureAttributes[]> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createFurniture_Request = async (
	data: CreateFurnitureDto
): PromiseFormatRes<furnitureAttributes> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateFurniture_Request = async (
	id: string,
	data: UpdateFurnitureDto
): PromiseFormatRes<furnitureAttributes> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteFurniture_Request = async (
	id: string
): PromiseFormatRes<furnitureAttributes> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
