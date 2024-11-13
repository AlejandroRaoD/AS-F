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