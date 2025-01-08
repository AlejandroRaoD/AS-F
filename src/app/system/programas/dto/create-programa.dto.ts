import { programaAttributes } from "../interfaces/programa.interface";

export interface CreateProgramaDto
	extends Omit<programaAttributes, "_id" | "status"> {}
