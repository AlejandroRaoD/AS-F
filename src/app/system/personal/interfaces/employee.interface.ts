import { Gender, Nationality } from "@/app/common/interfaces/enums";

export enum BusinessPosition {
	fiam = "fiam",
	other = "other",
}

export interface employeeAttributes {
	_id: string;
	name: string;
	lastname: string;
	birthday: Date;
	nationality: Nationality;
	CI: string;
	email: string;
	gender: Gender;
	address: string;
	phone_number: string[];
	businessPosition: BusinessPosition;
	sedeId: string;
}
