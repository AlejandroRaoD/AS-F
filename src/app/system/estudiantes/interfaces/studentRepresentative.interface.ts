import { representativeAttributes } from "../../representantes/interfaces/representative.interface";
import { studentAttributes } from "./student.interface";

export interface studentRelationAttributes {
	_id: string;
	representativeId: string;
	studentId: string;
	familyBond: string;
}

export interface studentRelationAllDataAttributes {
	_id: string;
	representativeId: representativeAttributes;
	studentId: studentAttributes;
	familyBond: string;
}
