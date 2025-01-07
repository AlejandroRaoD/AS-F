
export enum programaStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface programaAttributes {
	_id: string;
	name: string;
	description: string;
	sedeId: string;
	directorId: string;
	status: programaStatus;
}