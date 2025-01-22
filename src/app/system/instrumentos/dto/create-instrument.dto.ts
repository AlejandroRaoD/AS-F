import { instrumentAttributes } from "../interfaces/instrument.interface";

export interface CreateInstrumentDto
	extends Omit<instrumentAttributes, "_id" | "status"> {}
