import { Gender, Nationality } from "@/types";

export interface CreateStudentDto  {
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
