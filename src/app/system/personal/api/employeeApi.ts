import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { employeeAttributes } from "../interfaces/employee.interface";
import { QueryEmployeeDto } from "../dto/query-employee.dto";
import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";

const url = `employee`;

export const getEmployee_Request = async (
	id: string
): Promise<PromiseFormatRes<employeeAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getEmployees_Request = async (
	query?: QueryEmployeeDto
): Promise<PromiseFormatRes<employeeAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createEmployee_Request = async (
	data: CreateEmployeeDto
): Promise<PromiseFormatRes<employeeAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateEmployee_Request = async (
	id: string,
	data: UpdateEmployeeDto
): Promise<PromiseFormatRes<employeeAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteEmployee_Request = async (
	id: string
): Promise<PromiseFormatRes<employeeAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
