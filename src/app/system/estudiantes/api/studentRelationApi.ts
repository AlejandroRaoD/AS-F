import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { QueryStudentRelationDto } from "../dto/query-student-relation.dto";
import { CreateStudentRelationDto } from "../dto/create-student-relation.dto";
import { UpdateStudentRelationDto } from "../dto/update-student-relation.dto";
import { studentRelationAllDataAttributes } from "../interfaces/studentRepresentative.interface";

const url = `student/relation`;

// export const getStudentRelation_Request = async (
// 	id: string
// ): PromiseFormatRes<studentRelationAttributes> =>
// 	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getStudentRelations_Request = async (
	query?: QueryStudentRelationDto
): Promise<PromiseFormatRes<studentRelationAllDataAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createStudentRelation_Request = async (
	data: CreateStudentRelationDto
): Promise<PromiseFormatRes<studentRelationAllDataAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateStudentRelation_Request = async (
	id: string,
	data: UpdateStudentRelationDto
): Promise<PromiseFormatRes<studentRelationAllDataAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteStudentRelation_Request = async (
	id: string
): Promise<PromiseFormatRes<studentRelationAllDataAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
