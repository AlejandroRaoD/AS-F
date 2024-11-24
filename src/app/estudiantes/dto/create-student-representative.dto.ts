import { studentRepresentativeAttributes } from "../interfaces/studentRepresentative.interface";

export interface CreateStudentRepresentativeDto {
	// representativeId: string;
	representativeCI: string;
	studentId: string;
	familyBond: string;
}
