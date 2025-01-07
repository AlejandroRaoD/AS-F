import { furnitureAttributes } from "../interfaces/furniture.interface";

export interface CreateFurnitureDto
	extends Omit<furnitureAttributes, "_id" | "status"> {}
