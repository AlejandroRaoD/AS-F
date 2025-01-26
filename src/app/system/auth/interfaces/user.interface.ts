import { employeeAttributes } from "../../personal/interfaces/employee.interface";

export enum UserPermissions {
	edit = "edit",
}

export interface UserAttributes {
	_id: string;
	email: string;
	password: string;
	permissions: UserPermissions[];
	employeeId: string;
}

export interface UserLoggedAttributes {
	_id: string;
	email: string;
	permissions: UserPermissions[];
	employeeId: employeeAttributes;
}
