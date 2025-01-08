
export enum FurnitureStatus {
	active = "a",
}

export interface furnitureAttributes {
	_id: string;
	name: string;
	quantity: number;
	description: string;
	serialNumber: string;
	brand: string;
	model: string;
	status: FurnitureStatus;
	observation: string;
	localLocation: string;
	sedeId: string;
}
