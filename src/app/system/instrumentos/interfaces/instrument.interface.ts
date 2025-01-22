
export enum InstrumentStatus {
	active = "a",
}

export interface instrumentAttributes {
	_id: string;
	name: string;
	description: string;
	serialNumber: string;
	brand: string;
	model: string;
	status: InstrumentStatus;
	observation: string;
	sedeId: string;
}