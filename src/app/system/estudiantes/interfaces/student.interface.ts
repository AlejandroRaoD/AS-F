import { Gender, Nationality } from "@/app/common/interfaces/enums";

export enum StudentStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface studentAttributes {
	_id: string;
	name: string;
	lastname: string;
	birthday: string;
	nationality: Nationality;
	CI: string;
	email: string;
	gender: Gender;
	address: string;
	phone_number: string[];
	hasInstrument: boolean;
	status: StudentStatus;
}
