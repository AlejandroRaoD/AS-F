
export enum catedraStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface catedraAttributes {
	_id: string;
	programaId: string;
	name: string;
	description: string;
	status: catedraStatus;
}
