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
