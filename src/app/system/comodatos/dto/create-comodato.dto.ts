import { ComodatoAttributes } from "../interfaces/comodato.interface";

export interface CreateComodatoDto
	extends Omit<ComodatoAttributes, "_id" | "status"> {}
