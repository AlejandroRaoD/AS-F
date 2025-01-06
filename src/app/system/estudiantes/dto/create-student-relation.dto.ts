import { studentRelationAttributes } from "../interfaces/studentRepresentative.interface";

export interface CreateStudentRelationDto
	extends Omit<studentRelationAttributes, "_id"> {}
