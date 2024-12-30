import { studentRelationAttributes } from "@/types";

export interface CreateStudentRelationDto
	extends Omit<studentRelationAttributes, "_id"> {}
