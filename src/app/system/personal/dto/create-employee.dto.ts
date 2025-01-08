import { employeeAttributes } from "../interfaces/employee.interface";

export interface CreateEmployeeDto
	extends Omit<employeeAttributes, "_id" | "status"> {}
