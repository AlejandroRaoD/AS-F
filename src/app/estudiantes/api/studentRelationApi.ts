import abreuSystemAPI from "@/config/AxiosInstance";
import { QueryStudentRepresentativeDto } from "../dto/query-student-representative.dto";
import { CreateStudentRepresentativeDto } from "../dto/create-student-representative.dto";
import { UpdateStudentRepresentativeDto } from "../dto/update-student-representative.dto";

export const getStudentRelation_request = async (id: string) =>
	await abreuSystemAPI.get(`/student/relation/${id}`);

export const getStudentRelations_request = async (
	query?: QueryStudentRepresentativeDto
) => await abreuSystemAPI.get("/student/relation", { params: query });

export const createStudentRelation_request = async (
	formData: CreateStudentRepresentativeDto
) => await abreuSystemAPI.post("/student/relation", formData);

export const updateStudentRelation_request = async (
	studentId: string,
	formData: UpdateStudentRepresentativeDto
) => await abreuSystemAPI.put(`/student/relation/${studentId}`, formData);

export const deleteStudentRelation_request = async (studentId: string) =>
	await abreuSystemAPI.delete(`/student/relation/${studentId}`);
