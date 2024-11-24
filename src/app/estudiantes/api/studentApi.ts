import abreuSystemAPI from "@/config/AxiosInstance";
import { QueryStudentDto } from "../dto/query-student.dto";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";

export const getStudent_request = async (id: string) =>
	await abreuSystemAPI.get(`/student/${id}`);

export const getStudents_request = async (query?: QueryStudentDto) =>
	await abreuSystemAPI.get("/student", { params: query });

export const createStudent_request = async (formData: CreateStudentDto) =>
	await abreuSystemAPI.post("/student", formData);

export const updateStudent_request = async (
	studentId: string,
	formData: UpdateStudentDto
) => await abreuSystemAPI.put(`/student/${studentId}`, formData);

export const deleteStudent_request = async (studentId: string) =>
	await abreuSystemAPI.delete(`/student/${studentId}`);
