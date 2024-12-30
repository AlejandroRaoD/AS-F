import { studentAttributes } from "../interfaces/student.interface";

export interface CreateStudentDto
	extends Omit<studentAttributes, "_id" | "status"> {}
