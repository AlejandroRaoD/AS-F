import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import { QueryFurnitureDto } from "../dto/query-furniture.dto";
import { CreateFurnitureDto } from "../dto/create-furniture.dto";
import { UpdateFurnitureDto } from "../dto/update-furniture.dto";

const url = `furniture`;

export const getFurniture_Request = async (
  id: string
): Promise<PromiseFormatRes<furnitureAttributes>> => {
  const response = await abreuSystemAPI.get(`${url}/${id}`);
  return response.data;
};

export const getFurnitures_Request = async (
  query?: QueryFurnitureDto
): Promise<PromiseFormatRes<furnitureAttributes[]>> => {
  const response = await abreuSystemAPI.get(url, { params: query });
  return response.data;
};

export const createFurniture_Request = async (
  data: CreateFurnitureDto
): Promise<PromiseFormatRes<furnitureAttributes>> => {
  const response = await abreuSystemAPI.post(url, data);
  return response.data;
};

export const updateFurniture_Request = async (
  id: string,
  data: UpdateFurnitureDto
): Promise<PromiseFormatRes<furnitureAttributes>> => {
  const response = await abreuSystemAPI.put(`${url}/${id}`, data);
  return response.data;
};

export const deleteFurniture_Request = async (
  id: string
): Promise<PromiseFormatRes<furnitureAttributes>> => {
  const response = await abreuSystemAPI.delete(`${url}/${id}`);
  return response.data;
};
