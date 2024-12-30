import {
	Gender,
	Nationality,
	StudentStatus,
	nucleoStatus,
} from "./app/common/interfaces/enums";

export interface nucleoAttributes {
	_id: string;
	name: string;
	status: nucleoStatus;
}

export interface sedeAttributes {
	_id: string;
	name: string;
	address: string;
	phone_number: string[];
	nucleoId: string;
	status: string;
}

export interface studentRelationAttributes {
	_id: string;
	representativeId: string;
	studentId: string;
	familyBond: String;
}





export interface UserAttributes {
	_id: string;
	email: string;
	password: string;
	permissions: string[];
	employeeId: string;
}
