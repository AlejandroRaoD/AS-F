








import abreuSystemAPI from "@/config/AxiosInstance";
import { QueryStudentDto } from "../dto/query-student.dto";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { studentAttributes } from "../interfaces/student.interface";

const url = `student`;

export const getStudent_Request = async (
	id: string
): Promise<PromiseFormatRes<studentAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getStudents_Request = async (
	query?: QueryStudentDto
): Promise<PromiseFormatRes<studentAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createStudent_Request = async (
	data: CreateStudentDto
): Promise<PromiseFormatRes<studentAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateStudent_Request = async (
	id: string,
	data: UpdateStudentDto
): Promise<PromiseFormatRes<studentAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteStudent_Request = async (
	id: string
): Promise<PromiseFormatRes<studentAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;

