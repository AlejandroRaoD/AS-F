import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { studentEnrollmentAttributes } from "../interfaces/studentEnrollment.interface";
import { QueryStudentEnrollmentDto } from "../dto/query-student-enrollment.dto";
import { CreateStudentEnrollmentDto } from "../dto/create-student-enrollment.dto";
import { UpdateStudentEnrollmentDto } from "../dto/update-student-enrollment.dto";

const url = `student_enrollment`;

export const getStudentEnrollment_Request = async (
	id: string
): Promise<PromiseFormatRes<studentEnrollmentAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getStudentEnrollments_Request = async (
	query?: QueryStudentEnrollmentDto
): Promise<PromiseFormatRes<studentEnrollmentAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createStudentEnrollment_Request = async (
	data: CreateStudentEnrollmentDto
): Promise<PromiseFormatRes<studentEnrollmentAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateStudentEnrollment_Request = async (
	id: string,
	data: UpdateStudentEnrollmentDto
): Promise<PromiseFormatRes<studentEnrollmentAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteStudentEnrollment_Request = async (
	id: string
): Promise<PromiseFormatRes<studentEnrollmentAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
