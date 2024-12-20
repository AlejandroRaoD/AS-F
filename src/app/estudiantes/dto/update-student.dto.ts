import { Gender, Nationality } from "@/app/common/interfaces/enums";

export interface UpdateStudentDto {
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
}
