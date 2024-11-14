export enum nucleoStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface nucleoAttributes {
	_id: string;
	name: string;
	status: nucleoStatus;
}

export enum sedeStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface sedeAttributes {
	_id: string;
	name: string;
	address: string;
	phone_number: string[];
	nucleoId: string;
	status: string;
}

export interface CreateSedeDto {
	name: string;
	address: string;
	phone_number: string[];
	nucleoId: string;
}
