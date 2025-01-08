import { catedraAttributes } from "../interfaces/catedra.interface";

export interface CreateCatedraDto
	extends Omit<catedraAttributes, "_id" | "status"> {}
