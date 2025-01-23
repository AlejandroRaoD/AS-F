import { studentEnrollmentAttributes } from "../interfaces/studentEnrollment.interface";

export interface CreateStudentEnrollmentDto
	extends Omit<studentEnrollmentAttributes, "_id" | "status"> {}
