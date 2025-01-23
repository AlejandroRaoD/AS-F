export enum ComodatoStatus {
	active = "a",
	delete = "d",
}

export interface ComodatoAttributes {
	_id: string;
	instrumentId: string;
	studentId: string;
	status: ComodatoStatus;
	initDate: string;
	endDate: string;
	contractNumber: number;
}
